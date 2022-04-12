import React, { FunctionComponent } from "react";
import styles from "./circle.module.css";

const type Props = {
    circleClass: string;
}

const Circle: FunctionComponent = ({ circleClass }): JSX.Element => {
    return <div className={circleClass} />;
};

export default Circle;
