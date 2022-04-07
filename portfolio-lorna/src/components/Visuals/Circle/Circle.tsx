import React from "react";
import PropTypes from "prop-types";
import styles from "./circle.module.css";

interface Props = {
    children: string
}

const Circle = ({ children }) : JSX.Element => {
    return <div className={styles.circle}>{children}</div>;
};

Circle.propTypes = {
    chidlren: PropTypes.node
}

export default Circle;
