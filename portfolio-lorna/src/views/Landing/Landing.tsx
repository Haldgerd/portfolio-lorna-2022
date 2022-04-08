import React from "react";
// import styles from "./landing.module.css";

// ----------------------- COMPONENTS IMPORT
import Image from "../../components/UI/Image";
import Title from "../../components/UI/Title";
import Circle from "../../components/Visuals/Circle/Circle";
import SideBar from "../../components/Layout/SideBar/Sidebar";

const Landing = () => {
    return (
        <section>
            <div>
                <Circle />
                <Image />
            </div>
            <SideBar />
            <header>
                <Title
                    titleClass="text-9xl text-green-300 font-bold"
                    title="I AM LORNA"
                />
            </header>
        </section>
    );
};

export default Landing;
