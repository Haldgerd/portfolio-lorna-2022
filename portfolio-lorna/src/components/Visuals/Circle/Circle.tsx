import React from "react";

type Props = {
    circleClass: string;
};

const Circle: React.FC<Props> = ({ circleClass }): JSX.Element => {
    return <div className={`circle ${circleClass}`} />;
};

export default Circle;
