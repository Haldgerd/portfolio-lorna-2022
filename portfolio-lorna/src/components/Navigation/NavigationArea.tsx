import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import generateHashID from '../../util/helpers/generateHashID.js';
import Button from '../UI/Button';

const NAV_ICONS = [
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-3xl"
                icon="file-icons:terminal"
                color="#262724"
            />
        ),
        path: '/skills',
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-4xl"
                icon="clarity:floppy-solid"
                color="#262724"
            />
        ),
        path: '/projects',
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-4xl"
                icon="clarity:cd-dvd-solid"
                color="#262724"
            />
        ),
        path: '/skills',
    },
    {
        id: generateHashID(),
        icon: (
            <Icon
                className="tw-text-4xl"
                icon="mdi:robot-confused"
                color="#262724"
            />
        ),
        path: '/projects',
    },
];

const NavigationArea: React.VFC = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <menu className="tw-fixed tw-right-10 tw-bottom-7 tw-flex tw-z-10">
            {NAV_ICONS.map((button) => {
                return (
                    <Button
                        key={button.id}
                        btnClass="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-bg-yellow-400 tw-ml-3 tw-w-14 tw-h-14 hover:tw-bg-red-500"
                        type="button"
                        action={() => {
                            navigate(button.path);
                        }}
                    >
                        {button.icon}
                    </Button>
                );
            })}
        </menu>
    );
};

export default NavigationArea;
