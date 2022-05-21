import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Home from '../../components/Home/Home';

const Landing: React.VFC = (): JSX.Element => {
    return (
        <>
            <Home />
            <Banner />
            <Contact />
        </>
    );
};

export default Landing;
