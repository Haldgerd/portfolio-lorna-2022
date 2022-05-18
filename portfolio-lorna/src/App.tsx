import React from 'react';
import Portfolio from './views/Portfolio/Portfolio';
import Contact from './views/Contact/Contact';
import Banner from './views/Banner/Banner';

const App: React.VFC = (): JSX.Element => {
    return (
        <>
            <Portfolio />
            <Banner />
            <Contact />
        </>
    );
};

export default App;
