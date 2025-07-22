import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, NavLink } from 'react-router-dom';

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
    activeStyle = false,
    leftIcon,
    rightIcon,
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
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        if (activeStyle) {
            //Nếu có to và activeStyle, component sẽ render như một NavLink
            props.className=({ isActive }) => cx(classes, { active: isActive });
            Comp = NavLink;
            // Xử lý case có icon thay đổi theo trạng thái active 
            if (typeof leftIcon === 'function') {
                return (
                    <Comp {...props}>
                        {({ isActive }) => (
                            <>
                                <span className={cx('icon')}>{leftIcon({ isActive })}</span>
                                <span className={cx('title')}>{children}</span>
                            </>
                        )}
                    </Comp>
                );
            }
        } else {
            //Nếu chỉ có to (không có activeStyle), component sẽ render như một Link
            Comp = Link;
        }
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

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    activeStyle: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
