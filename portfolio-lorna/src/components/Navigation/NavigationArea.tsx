import React from "react";
import generateHashID from "../../util/helpers/generateHashID.js";
import Button from "../UI/Button";
import { Icon } from "@iconify/react";

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="text-4xl"
                icon="file-icons:terminal"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="text-5xl"
                icon="clarity:floppy-solid"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="text-5xl"
                icon="clarity:cd-dvd-solid"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="text-5xl"
                icon="mdi:robot-confused"
                color="#262724"
            />
        ),
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
                    content={button.icon}
                />
            ))}
        </menu>
    );
};

export default NavigationArea;
