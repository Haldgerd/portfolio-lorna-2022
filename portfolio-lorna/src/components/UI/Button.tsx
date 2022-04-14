import React from "react";

const Button: React.FC = ({ btnClass, content, type }): JSX.Element => {
    return (
        <button className={btnClass} type={type || "button"}>
            {content}
        </button>
    );
};

export default Button;
