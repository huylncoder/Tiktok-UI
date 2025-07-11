import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import image from '~/assets/img';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <a className={cx('wrapper')} href="/">
            <img
                className={cx('imgAvatar')}
                src={image.avatar}
                alt="songtungmtp"
            />
            <div className={cx('sugInfo')}>
                <h4 className={cx('sug-username')}>
                    capyboiii_7
                    <span className={cx('sug-checkBlue')}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                </h4>
                <span className={cx('sug-nickname')}>Son Tung M-TP</span>
            </div>
        </a>
    );
};

export default AccountItem;
