import React from "react";

type Props = {
    btnClass: string;
    children: React.ReactNode;
    type: "submit" | "reset" | "button";
};

const Button: React.FC<Props> = ({ btnClass, children, type }): JSX.Element => {
    return (
        <button className={btnClass} type={type || "button"}>
            {children}
        </button>
    );
};

export default Button;
