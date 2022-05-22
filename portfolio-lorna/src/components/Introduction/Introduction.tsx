import React from 'react';
import { Icon } from '@iconify/react';
import styles from './introduction.module.css';

const Introduction: React.VFC = (): JSX.Element => {
    return (
        <aside className="tw-flex tw-justify-center tw-items-center tw-py-4">
            <Icon
                icon="file-icons:terminal"
                className={`${styles['introduction__icon--terminal']} tw-text-red-500 tw-mr-6`}
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quam architecto veritatis error quaerat incidunt, quos
                enim eius officiis! Eius culpa maiores impedit nisi eveniet ea
                itaque nulla atque in, quam consequatur debitis blanditiis vel
                amet doloribus veritatis nequei!
            </p>
        </aside>
    );
};

export default Introduction;
