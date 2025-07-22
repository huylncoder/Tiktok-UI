import PropTypes from 'prop-types';

const MenuSidebar = ({ children }) => {
    return <nav>{children}</nav>;
};

MenuSidebar.prototype = {
    children: PropTypes.node.isRequired,
};

export default MenuSidebar;
