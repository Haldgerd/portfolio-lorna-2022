import React from "react";

const Button = ({ btnClass, content, type }) => {
    return (
        <button className={btnClass} type={type}>
            {content}
        </button>
    );
};

export default Button;
