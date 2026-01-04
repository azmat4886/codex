import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Company from './components/Company';
import Architecture from './components/Architecture';
import UseCases from './components/UseCases';
import Whitepaper from './components/Whitepaper';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Disclaimer from './components/Disclaimer';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-container">
            <Header
                currentView={location.pathname}
                isScrolled={isScrolled}
            />
            <main style={{ paddingTop: 'var(--header-height)' }}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Features />
                        </>
                    } />
                    <Route path="/architecture" element={<Architecture />} />
                    <Route path="/usecases" element={<UseCases />} />
                    <Route path="/team" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/whitepaper" element={<Whitepaper />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}


export default App;
