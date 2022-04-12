import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";

const Section: FunctionComponent = ({ children }): JSX.Element => {
    return <section>{children}</section>;
};

Section.prototype = {
    children: PropTypes.node.isRequired,
};

export default Section;
