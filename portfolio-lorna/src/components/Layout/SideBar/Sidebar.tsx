import React from 'react';
import year from '../../../util/helpers/generateDate';
import styles from './sidebar.module.css';

const Sidebar: React.VFC = (): JSX.Element => {
    return (
        <aside className="tw-bg-yellow-400 tw-h-screen tw-w-12 tw-fixed tw-left-10 tw-z-10 tw-text-black tw-py-2 tw-flex tw-flex-col tw-justify-between tw-items-center">
            <div>
                <p className={`${styles.sidebar__author} tw-m-auto tw-mb-7`}>
                    created with RAM by{' '}
                    <span
                        className={`${styles['sidebar__circle--small']} tw-bg-red-500 tw-my-0.5`}
                    />
                    <span className="tw-text-teal-600 tw-mt-1">
                        ローナ “LORNA”
                    </span>
                </p>
                <time
                    dateTime={String(year)}
                    className="tw-flex tw-flex-col tw-items-center"
                >
                    <span className={`${styles.sidebar__square} tw-bg-black`} />
                    {year()}
                </time>
            </div>
            <div>
                <div>01</div>
                <span
                    className={`${styles['sidebar__circle--small']} tw-bg-red-500`}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
