import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    text = false,
    disabled = false,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon = false,
    rightIcon = false,
    children,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
        disabled,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // loại bỏ sự kiện khi disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
