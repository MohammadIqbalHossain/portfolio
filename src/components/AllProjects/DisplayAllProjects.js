import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const DisplayAllProjects = ({ projectInfo }) => {
    const { name, img, des, preview, serverCode, clientCode } = projectInfo;

    const [cliked, setCliked] = useState(false)

    return (
        <div className="mx-auto">
            <div className="md:w-[500px] rounded-3xl shadow-xl bg-white hover:bg-gray-900">
                <div className="flex justify-center">
                    <img className="h-[300px] w-full rounded-t-3xl" src={img} alt="" />
                </div>
                <div className="mx-10">
                    <h1 className="text-3xl text-left font-bold my-3">{name}</h1>

                    <p className="text-left ">
                        {des}
                    </p>

                    {cliked === true ? <div className="hidded md:ml-40 mt-2 flex">

                        <li className="m-1 list-none">
                            <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                <Link to="/details">Details</Link>
                            </button>
                        </li>


                        <li className="m-1 list-none">
                            <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                <a href={serverCode} target="blank">
                                    Server
                                </a>
                            </button>
                        </li>

                        <li className="m-1 list-none">
                            <button className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                <a href={clientCode} target="blank">Client</a>
                            </button>
                        </li>



                    </div> : ""}

                    <div className="flex justify-between">
                        <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left my-5 rounded-3xl mb-5" >
                            <a href={preview} target="blank">
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

        </div>
    );
};

export default DisplayAllProjects;