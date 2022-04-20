import React from "react";

type Props = {
    children: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }): JSX.Element => {
    return <section>{children}</section>;
};

export default Section;
