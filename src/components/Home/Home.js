import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <AboutMe />
            <Footer />
        </div>
    );
};

export default Home;