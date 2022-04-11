import React from "react";
import generateHashID from "../../util/helpers/generateHashID.js";
import Button from "../UI/Button";

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: "icon",
        content: "btn",
    },
    {
        id: generateHashID(),
        icon: "icon",
        content: "btn",
    },
    {
        id: generateHashID(),
        icon: "icon",
        content: "btn",
    },
    {
        id: generateHashID(),
        icon: "icon",
        content: "btn",
    },
];

const NavigationArea = () => {
    return (
        <menu className="fixed right-10 bottom-7 flex">
            {NAV_ICONS.map((button) => (
                <Button
                    key={button.id}
                    btnClass="flex justify-center items-center rounded-full bg-yellow-400 ml-3 w-16 h-16"
                    type="button"
                    content={button.content}
                />
            ))}
        </menu>
    );
};

export default NavigationArea;
