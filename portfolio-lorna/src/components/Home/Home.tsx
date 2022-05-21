import React from 'react';
import Header from '../Header/Header';
import Image from '../UI/Image';
import Circle from '../Visuals/Circle/Circle';
import styles from './home.module.css';

const Home: React.VFC = (): JSX.Element => {
    return (

        <section className="tw-grid tw-grid-cols-7 tw-grid-rows-4">
            <Image />
            <Circle
                circleClass={`${styles.circle__position} tw-absolute -z-10 tw-bg-red-500 tw-rounded-full -tw-top-17 tw-left-36 tw-w-70 tw-h-70`}
            />
            <Header />
        </section>
    );
};

export default Home;
