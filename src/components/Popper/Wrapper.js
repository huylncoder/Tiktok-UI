import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
