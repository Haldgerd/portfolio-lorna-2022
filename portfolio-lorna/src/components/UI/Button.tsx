import React from "react";

type Props = {
    btnClass: string;
    children: React.ReactChild;
    type: "submit" | "reset" | "button";
};

const Button: React.FC<Props> = ({
    btnClass,
    children,
    type = "button",
}): JSX.Element => {
    return (
        <button className={btnClass} type={type}>
            {children}
        </button>
    );
};

export default Button;
