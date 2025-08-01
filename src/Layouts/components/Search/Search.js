import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';

import * as searchSevices from '~/services/searchSevice';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        // tách gọi API bên ngoài chỉ import sử dụng thôi
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchSevices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const value = e.target.value;
        // Nếu từ khoá không bắt đầu bằng space thì setSearchValue
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search-header')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('btn-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
