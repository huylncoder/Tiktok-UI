import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src="" alt="" />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </header>

            <div className={cx('sug-info')}>
                <div className={cx('nickname')}>
                    <strong>huyln</strong>
                    <span className={cx('checkBlue')}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                </div>
                <p className={cx('fullname')}>Coder và cột sống</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
