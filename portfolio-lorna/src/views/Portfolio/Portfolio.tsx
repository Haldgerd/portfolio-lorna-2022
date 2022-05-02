import React from "react";
import Sidebar from "../../components/Layout/SideBar/Sidebar";
import NavigationArea from "../../components/Navigation/NavigationArea";
import Image from "../../components/UI/Image";
import Circle from "../../components/Visuals/Circle/Circle";
import styles from "./portfolio.module.css";

const Portfolio: React.VFC = (): JSX.Element => {
    return (
        <section className="grid">
            <Sidebar />
            <NavigationArea />
            <Image />
            <Circle
                circleClass={`${styles.circle__position} tw-absolute -z-10 tw-bg-red-500 tw-rounded-full -tw-top-17 tw-left-36 tw-w-70 tw-h-70`}
            />
        </section>
    );
};

export default Portfolio;
