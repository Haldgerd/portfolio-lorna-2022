import React from 'react';
import NavigationArea from '../../components/Navigation/NavigationArea';
import Sidebar from '../../components/SideBar/Sidebar';

const About: React.VFC = (): JSX.Element => {
    return (
        <>
            <Sidebar />
            <NavigationArea />
        </>
    );
};

export default About;
