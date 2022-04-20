import React from "react";
import { styles } from "./circle.module.css";

type Props = {
    circleClass: string;
};

const Circle: React.FC<Props> = ({ circleClass }): JSX.Element => {
    return <div className={`${styles.circle} ${circleClass}`} />;
};

export default Circle;
