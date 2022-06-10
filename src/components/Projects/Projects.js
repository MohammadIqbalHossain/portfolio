import React, { useEffect, useState } from 'react';
import HomeProjects from './HomeProjects';

const Projects = () => {
    const [homeProjects, setHomeProjects] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setHomeProjects(data))
    }, [])

    const slicedProjects = homeProjects.slice(0, 4);

    return (
        <div className="flex flex-wrap gap-5 my-20" data-aos="fade-up">
            {
                slicedProjects.map(project => <HomeProjects
                key={project._id}
                projectData={project}
                ></HomeProjects>)
            }
        </div>
    );
};

export default Projects;