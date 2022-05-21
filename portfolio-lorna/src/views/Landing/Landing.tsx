import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Home from '../../components/Home/Home';
import NavigationArea from '../../components/Navigation/NavigationArea';
import Sidebar from '../../components/SideBar/Sidebar';

const Landing: React.VFC = (): JSX.Element => {
    return (
        <>
            <Sidebar />
            <Home />
            <Banner />
            <Contact />
            <NavigationArea />
        </>
    );
};

export default Landing;
