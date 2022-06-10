import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <AboutMe />
        </div>
    );
};

export default Home;