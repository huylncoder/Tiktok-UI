import PropTypes from 'prop-types';

import './GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
    return <div>{children}</div>;
};

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
