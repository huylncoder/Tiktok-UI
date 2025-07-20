import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`/profile/@${data.nickname}`} className={cx('wrapper')} href="/">
            <Image
                className={cx('imgAvatar')}
                src={data.avatar}
                alt={data.avatar}
            />
            <div className={cx('sugInfo')}>
                <h4 className={cx('sug-username')}>
                    {data.full_name}
                    <span className={cx('sug-checkBlue')}>
                        {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                    </span>
                </h4>
                <span className={cx('sug-nickname')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;
