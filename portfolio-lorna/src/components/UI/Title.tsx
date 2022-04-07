import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, titleClass }): JSX.Element => {
    return <h1 className={titleClass}>{title}</h1>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    titleClass: PropTypes.string.isRequired,
};

export default Title;
