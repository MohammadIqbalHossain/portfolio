import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io';
import { SiHtml5 } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { SiExpress } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';



const Details = () => {

    const { id } = useParams()
    const [projectData, setProjectData] = useState([]);

    console.log(projectData);

    useEffect(() => {

        fetch(`/Data.json`)
            .then(res => res.json())
            .then(data => setProjectData(data))
    }, [id])


    const filteredProject = projectData.filter(project => project._id === id);
    console.log(filteredProject);

    return (
        <div>

            <section className="flex flex-col justify-center antialiased min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">

                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-1 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

                        <div className="flex justify-center ">
                            <img className="transform rounded-lg hover:scale-105 transition duration-700 ease-out" src={filteredProject[0]?.img} width="900" height="600" alt="details about project" />
                        </div>

                        <div>
                            <header>
                                <h3 className="text-2xl md:text-left lg:text-3xl font-bold leading-tight mb-2">
                                    <h1 className="hover:text-gray-800 transition duration-150 ease-in-out" >{filteredProject[0]?.name}</h1>
                                </h3>
                            </header>
                            <p className="text-lg md:text-left text-gray-400 flex-grow">{filteredProject[0]?.des}</p>
                        </div>


                        <div>
                            <div className="w-32 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">

                            </div>
                            <h1 className="thicker-font md:text-[50px] text-[40px] text-left xs:leading-10 leading-tight">
                                Very <span className="gradinet-text">VIP project with React.js</span> and making it <span className="gradinet-text">furthur better</span>
                            </h1>

                            <p className="text-gray-400 text-2xl text-left my-10">
                                Filmpire combines the desire to unleash powerful creativity with the industry's most advanced JavaScript tools including React.js, Material UI, Alan AI, and more to provide hands-on, practical experience for intermediate to expert software developers seeking fulfilling opportunities within their career.
                            </p>

                            <p className="text-gray-400 text-2xl text-left my-10">
                                Filmpire combines the desire to unleash powerful creativity with the industry's most advanced JavaScript tools including React.js, Material UI, Alan AI, and more to provide hands-on, practical experience for intermediate to expert software developers seeking fulfilling opportunities within their career.
                            </p>


                        </div>

                        <h1 className="font-bold text-2xl gradinet-text">Technology Used</h1>

                        <div className="flex gap-10 mx-auto md:w-[600px] flex-wrap">
                            <div class="p-6 bg-gray-100 rounded-lg">
                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">
                                    <FaReact className="text-7xl block mx-auto text-sky-400" />
                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">
                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">
                                    <SiTailwindcss className="text-7xl block mx-auto text-sky-400" />
                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">
                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">
                                    <IoLogoNodejs className="text-7xl block mx-auto text-green-700" />
                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">
                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">
                                    <SiHtml5 className="text-7xl block mx-auto text-purple-400" />
                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">

                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">

                                    <IoLogoJavascript className="text-7xl block mx-auto text-yellow-400" />

                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">

                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">

                                    <SiExpress className="text-7xl block mx-auto text-sky-400" />

                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">

                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">

                                    <SiFirebase className="text-7xl block mx-auto text-yellow-400" />

                                </div>
                            </div>

                            <div class="p-6 bg-gray-100 rounded-lg">

                                <div class="mb-5 transform hover:scale-150 transition duration-700 ease-out">

                                    <SiMongodb className="text-7xl block mx-auto text-green-700" />

                                </div>
                            </div>

                        </div>

                    </article>
                </div>
            </section>

        </div>
    );
};

export default Details;