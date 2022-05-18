import React from "react";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact";
import About from "./views/About";

const App: React.VFC = (): JSX.Element => {
    return (
        <>
            <Portfolio />
            <About />
            <Contact />
        </>
    );
};

export default App;
