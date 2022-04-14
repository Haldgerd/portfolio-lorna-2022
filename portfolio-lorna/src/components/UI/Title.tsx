import React from "react";

const Title: React.FC = ({ title, titleClass }): JSX.Element => {
    return <h1 className={titleClass}>{title}</h1>;
};

export default Title;
