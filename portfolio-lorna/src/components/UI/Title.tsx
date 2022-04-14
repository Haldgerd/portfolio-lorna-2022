import React from "react";

type Props = {
    title: string;
    titleClass: string;
};

const Title: React.FC<Props> = ({ title, titleClass }): JSX.Element => {
    return <h1 className={titleClass}>{title}</h1>;
};

export default Title;
