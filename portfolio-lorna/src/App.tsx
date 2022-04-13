import React from "react";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Portfolio />
            <div className="h-screen bg-red-600" />
            <div className="h-screen bg-black-700" />
            <Contact />
        </>
    );
};

export default App;
