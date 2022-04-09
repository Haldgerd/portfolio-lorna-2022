import React from "react";
import generateHashID from "../../util/helpers/generateHashID.js";
import Button from "../UI/Button";

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
    {
        id: generateHashID(),
        icon: "icon",
    },
];

const createNavButtons = () => {
    const navBtns = NAV_ICONS.map((button) => {
        return (
            <Button
                key={button.id}
                btnClass="bg-yellow-400 w-3 h-3 ml-2"
                content={button.icon}
                type="button"
            />
        );
    });

    return navBtns;
};

const NavigationArea = () => {
    return (
        <menu className="absolute right-10 bottom-7 bg-yellow-400 w-32 h-14">
            {createNavButtons}
        </menu>
    );
};

export default NavigationArea;
