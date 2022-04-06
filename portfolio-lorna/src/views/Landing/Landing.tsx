import React from "react";
import styles from "./landing.module.css";

const name: string = "I AM LORNA";

const Landing = () => {
    return (
        <section>
            <h1 className={styles.title}>{name}</h1>
        </section>
    );
};

export default Landing;
