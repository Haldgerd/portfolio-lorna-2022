import React from "react";
import Portfolio from "./views/Portfolio";

const App: React.FC = () => {
    return (
        <>
            <Portfolio />
            <div className="h-screen bg-red-600" />
            <div className="h-screen bg-gray-900" />
            <div className="h-screen bg-red-600" />
        </>
    );
};

export default App;
