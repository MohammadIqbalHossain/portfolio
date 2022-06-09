import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import project1 from '../../images/assignment-10.png';
import project2 from '../../images/ware-house-book-ss.png';
import project3 from '../../images/breathing-knowlage.png';
import project4 from '../../images/space-tourism-site.png';
import Contact from '../ContactMe/Contact';

const Projects = () => {

    const [cliked, setCliked] = useState(false)

    console.log(cliked);

    return (

        <>
            <h1 className="text-3xl uppercase font-bold gradinet-text">My Projets</h1>
            <div className="flex gap-10 flex-wrap mx-10 md:mx-0 justify-center items-center my-20">
                <div className="w-[500px] rounded-3xl shadow-xl bg-white hover:bg-[#60ECB6]">
                    <div className="flex justify-center">
                        <img className="h-[300px] w-full rounded-t-3xl" src={project1} alt="" />
                    </div>
                    <div className="mx-10">
                        <h1 className="text-3xl text-left font-bold my-3">analyse&write - A website for indivitual Writer</h1>

                        <p className="text-left ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis odio odit expedita repellendus ducimus sed, cumque a porro explicabo.
                        </p>



                        <div className="flex justify-between">
                            <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left my-5 rounded-3xl mb-5" >
                                <a href="https://writer-personal-site.web.app/" target="blank">
                                    Preview
                                </a>
                                <AiOutlineArrowRight className="ml-5 font-bold" />
                            </button>


                            <button className="bg-blue-400 rounded-3xl my-5 px-3 transition">
                                <a href="https://github.com/MohammadIqbalHossain/writer-personal-website" target="blank">
                                    <BiCodeAlt className="text-2xl" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[500px] rounded-3xl shadow-xl bg-white hover:bg-gray-900">
                    <div className="flex justify-center">
                        <img className="h-[300px] w-full rounded-t-3xl" src={project2} alt="" />
                    </div>
                    <div className="mx-10">
                        <h1 className="text-3xl text-left font-bold my-3">MerchEasy - Book warehouse Management</h1>

                        <p className="text-left ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis odio odit expedita repellendus ducimus sed, cumque a porro explicabo.
                        </p>

                        {cliked === true ? <div className="hidded  ml-64 flex">


                            <li className="m-1 list-none">
                                <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                    <a href="https://github.com/MohammadIqbalHossain/warehouse-management-server-site" target="blank">
                                        Server
                                    </a>
                                </button>
                            </li>

                            <li className="m-1 list-none">
                                <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                    <a href="https://github.com/MohammadIqbalHossain/warehouse-management-client-site" target="blank">Client</a>
                                </button>
                            </li>

                        </div> : ""}

                        <div className="flex justify-between">
                            <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left my-5 rounded-3xl mb-5" >
                                <a href="https://warehouse-site.web.app/" target="blank">
                                    Preview
                                </a>
                                <AiOutlineArrowRight className="ml-5 font-bold" />
                            </button>

                            <button onClick={() => setCliked(!cliked)} className="bg-blue-400 rounded-3xl my-5 px-3 transition">

                                <BiCodeAlt className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[500px] rounded-3xl shadow-xl bg-white hover:bg-gray-900">
                    <div className="flex justify-center">
                        <img className="h-[300px] w-full rounded-t-3xl" src={project3} alt="" />
                    </div>
                    <div className="mx-10">
                        <h1 className="text-3xl text-left font-bold my-3">RocketRock - Engine manufecturer company.</h1>

                        <p className="text-left ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis odio odit expedita repellendus ducimus sed, cumque a porro explicabo.
                        </p>

                        {cliked === true ? <div className="hidded  ml-64 flex">


                            <li className="m-1 list-none">
                                <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                    <a href="https://github.com/MohammadIqbalHossain/Spaceship-engine-manufecturer-server-site" target="blank">Server</a>
                                </button>
                            </li>

                            <li className="m-1 list-none">
                                <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                    <a href="https://github.com/MohammadIqbalHossain/Spaceship-engine-manufecturer-website" target="blank">Client</a>
                                </button>
                            </li>

                        </div> : ""}

                        <div className="flex justify-between">
                            <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left my-5 rounded-3xl mb-5" >
                                <a href="https://rocket-rock-cce05.web.app/" target="blank">
                                    Preview
                                </a>
                                <AiOutlineArrowRight className="ml-5 font-bold" />
                            </button>



                            <button onClick={() => setCliked(!cliked)} className="bg-blue-400 rounded-3xl my-5 px-3 transition">
                                <BiCodeAlt className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[500px] rounded-3xl shadow-xl bg-white hover:bg-gray-900">
                    <div className="flex justify-center">
                        <img className="h-[300px] w-full rounded-t-3xl" src={project4} alt="" />
                    </div>
                    <div className="mx-10">
                        <h1 className="text-3xl text-left font-bold my-3">ThroughSapce - A space tourism website</h1>

                        <p className="text-left ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis odio odit expedita repellendus ducimus sed, cumque a porro explicabo.
                        </p>




                        <div className="flex justify-between">
                            <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left my-5 rounded-3xl mb-5" >
                                <a href="https://mohammadiqbalhossain.github.io/Space-tourism-site/" target="blank">
                                    Preview
                                </a>
                                <AiOutlineArrowRight className="ml-5 font-bold" />
                            </button>

                            <button className="bg-blue-400 rounded-3xl my-5 px-3 transition">
                                <a href="https://github.com/MohammadIqbalHossain/Space-tourism-site" target="blank">
                                    <BiCodeAlt className="text-2xl" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <Contact />
        </>
    );
};

export default Projects;