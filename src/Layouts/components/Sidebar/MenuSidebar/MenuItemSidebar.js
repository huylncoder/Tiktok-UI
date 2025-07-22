import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const MenuItemSidebar = ({ title, to, icon, activeIcon }) => {
    const classes = cx('menu-item');

    const renderIcon = ({ isActive }) => {
        return isActive ? activeIcon : icon;
    }
    
    return (
        <Button 
            className={classes} 
            leftIcon={renderIcon} 
            to={to}
            activeStyle={true}
        >
           <span className={cx('menu-title')}>{title}</span>
        </Button>
    );
};

MenuItemSidebar.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItemSidebar;
