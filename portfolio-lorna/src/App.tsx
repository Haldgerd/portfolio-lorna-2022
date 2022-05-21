import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/About/About';
import Landing from './views/Landing/Landing';
import Projects from './views/Projects/Projects';
import Skills from './views/Skills/Skills';

const App: React.VFC = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
