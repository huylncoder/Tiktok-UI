// import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import Image from '../Image/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src="" alt="" />
                    <div className={cx('sug-info')}>
                        <div className={cx('nickname')}>
                            <strong>huyln</strong>
                            <span className={cx('checkBlue')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                        </div>
                        <p className={cx('fullname')}>Coder và cột sống</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
};

AccountItem.propTypes = {};

export default AccountItem;
