import React from 'react';
import Circle from '../Visuals/Circle/Circle';

import styles from './contact.module.css';

const Contact: React.FC = (): JSX.Element => {
    return (
        <section className={`${styles.contact} tw-flex tw-h-screen`}>
            <Circle circleClass="tw-bg-red-500 tw-rounded-full" />
        </section>
    );
};

export default Contact;
