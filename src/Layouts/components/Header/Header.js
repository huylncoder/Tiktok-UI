import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import imageLogo from '~/assets/img/index';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                
                <div className={cx('logo')}>
                    <a href="/"><img src={imageLogo.logo} alt="logoTiktok" width='100%'/></a>
                </div>

                <div className={cx('search-header')}>
                    <input placeholder='Search' spellCheck={false} />
                    <button className={cx('btn-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions_header')}>
                </div>
            </div> 
        </div>
    );
};

export default Header;
