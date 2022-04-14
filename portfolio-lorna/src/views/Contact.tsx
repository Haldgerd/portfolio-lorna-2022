import React from "react";
import Circle from "../components/Visuals/Circle/Circle";

const Contact: React.FC = (): JSX.Element => {
    return (
        <section className="tw-relative tw-flex tw-h-screen">
            <Circle circleClass="tw-bg-red-700 tw-rounded-full " />
        </section>
    );
};

export default Contact;
