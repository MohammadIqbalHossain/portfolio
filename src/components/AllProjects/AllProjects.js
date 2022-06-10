import React, { useEffect, useState } from 'react';
import DisplayAllProjects from './DisplayAllProjects';

const AllProjects = () => {
     const [allProjects, setALlProjects] = useState([]);

     useEffect(() => {
         fetch("Data.json")
         .then(res => res.json())
         .then(data => setALlProjects(data))
     }, [])
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2  gap-5">
            {
                allProjects.map(project => <DisplayAllProjects
                 key={project._id}
                 projectInfo={project}
                ></DisplayAllProjects>)
            }
        </div>

    );
};

export default AllProjects;