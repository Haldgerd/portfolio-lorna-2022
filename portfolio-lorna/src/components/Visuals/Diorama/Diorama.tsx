import React from "react";
import { styles } from "./diorama.module.css";

const Diorama: React.VFC = (): JSX.Element => {
    return (
        <div
            className={`${styles.diorama} tw-absolute -tw-top-40 tw-right-0 tw-bg-yellow-400`}
        />
    );
};

export default Diorama;
