import React from 'react';
import styles from './edge-line.module.css';

const EdgeLine: React.VFC = (): JSX.Element => {
    return (
        <div className="tw-bg-yellow-400 tw-h-12 tw-w-full tw-col-start-3 tw-flex tw-items-center tw-justify-center tw-pl-36">
            <p
                className={`${styles.edge__paragraph} tw-text-2xl tw-text-black`}
            >
                ARE YOU LOOKING FOR AN
                <span className="tw-text-red-500 tw-pl-2">EDGE?</span>
            </p>
        </div>
    );
};

export default EdgeLine;
