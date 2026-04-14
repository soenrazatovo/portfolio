import { HashRouter, Routes, Route, Link } from 'react-router'
import './App.css'

import Header from "../Header/Header.jsx"
import Home from "../Home/Home.jsx"
import Certifs from "../Certifs/Certifs.jsx"
import Projects from "../Projects/Projects.jsx"
import { PageProvider } from '../Context/PageContext.jsx';

function App() {

    return (
        <>
            <HashRouter>
                <PageProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/certifications" element={<Certifs />} />
                    </Routes>
                </PageProvider>
            </HashRouter>
        </>
    )
}

export default App
