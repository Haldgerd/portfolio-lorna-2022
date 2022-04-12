import React from "react";
import Sidebar from "../components/Layout/SideBar/Sidebar";
import NavigationArea from "../components/Navigation/NavigationArea";
import Image from "../components/UI/Image";
import Circle from "../components/Visuals/Circle/Circle";

const Portfolio = () => {
    return (
        <section className="grid">
            <Sidebar />
            <NavigationArea />
            <Image />
            <Circle circleClass="bg-red-400 rounded-full" />
        </section>
    );
};

export default Portfolio;
