import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Projects from './views/Projects/Projects';
import Skills from './views/Skills/Skills';

const App: React.VFC = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
