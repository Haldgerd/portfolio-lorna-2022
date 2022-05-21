import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Portfolio from '../../components/Portfolio/Portfolio';

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
