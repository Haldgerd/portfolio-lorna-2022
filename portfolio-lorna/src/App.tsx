import React from "react";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

const App: React.VFC = (): JSX.Element => {
    return (
        <>
            <Portfolio />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default App;
