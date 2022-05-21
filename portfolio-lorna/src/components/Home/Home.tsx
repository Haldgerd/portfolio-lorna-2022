import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Image from '../UI/Image';
import Circle from '../Visuals/Circle/Circle';
import NavigationArea from '../Navigation/NavigationArea';
import styles from './home.module.css';

const Home: React.VFC = (): JSX.Element => {
    return (
        <section className="grid">
            <Sidebar />
            <NavigationArea />
            <Image />
            <Circle
                circleClass={`${styles.circle__position} tw-absolute -z-10 tw-bg-red-500 tw-rounded-full -tw-top-17 tw-left-36 tw-w-70 tw-h-70`}
            />
            {/* <Header /> */}
        </section>
    );
};

export default Home;
