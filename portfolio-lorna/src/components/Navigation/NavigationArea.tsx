import React from "react";
import { Icon } from "@iconify/react";
import generateHashID from "../../util/helpers/generateHashID.js";
import Button from "../UI/Button";

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-4xl"
                icon="file-icons:terminal"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-5xl"
                icon="clarity:floppy-solid"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-5xl"
                icon="clarity:cd-dvd-solid"
                color="#262724"
            />
        ),
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-5xl"
                icon="mdi:robot-confused"
                color="#262724"
            />
        ),
    },
];

const NavigationArea: React.FC = (): JSX.Element => {
    return (
        <menu className="tw-fixed tw-right-10 tw-bottom-7 tw-flex tw-z-10">
            {NAV_ICONS.map((button) => {
                return (
                    <Button
                        key={button.id}
                        btnClass="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-bg-yellow-400 tw-ml-3 tw-w-16 tw-h-16"
                        type="button"
                        content={button.icon}
                    />
                );
            })}
        </menu>
    );
};

export default NavigationArea;
