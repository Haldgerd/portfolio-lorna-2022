import React from "react";
import Sidebar from "../components/Layout/SideBar/Sidebar";
import NavigationArea from "../components/Navigation/NavigationArea";
import Image from "../components/UI/Image";
import Circle from "../components/Visuals/Circle/Circle";

const Portfolio = () => {
    return (
        <section>
            <Sidebar />
            <NavigationArea />
            <Image />
            <Circle />
        </section>
    );
};

export default Portfolio;
