import React from "react";
import PropTypes from "prop-types";
import styles from "./circle.module.css";

const Circle = ({ children }): JSX.Element => {
    return <div className={styles.circle}>{children}</div>;
};

Circle.propTypes = {
    children: PropTypes.node,
};

Circle.defaultProps = {
    children: "",
};

export default Circle;
