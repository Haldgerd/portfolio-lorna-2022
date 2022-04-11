import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnClass, content, type }) => {
    return (
        <button className={btnClass} type={type}>
            {content}
        </button>
    );
};

Button.propTypes = {
    btnClass: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
