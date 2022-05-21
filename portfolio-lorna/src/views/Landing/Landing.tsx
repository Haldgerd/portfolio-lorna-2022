import React from 'react';
import Banner from '../../components/Layout/Banner/Banner';
import Contact from '../../components/Layout/Contact/Contact';
import Portfolio from '../../components/Layout/Portfolio/Portfolio';

const Landing: React.VFC = (): JSX.Element => {
    return (
        <>
            <Portfolio />
            <Banner />
            <Contact />
        </>
    );
};

export default Landing;
