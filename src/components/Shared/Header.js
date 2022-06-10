import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";


function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>

            <nav className="relative flex flex-wrap items-center justify-between py-6 bg-[#F5F9FF] px-20 top-0 sticky ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            to="/"
                        >
                            Iqbal
                        </Link>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg- block lg:hidden outline-none focus:outline-none w"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="black" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/blogs"
                                >
                                    <span className="ml-2">
                                        <label for="my-modal-6" class="modal-button">Contact me</label>
                                    </span>
                                </p>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/allProjects"
                                >
                                    <span className="ml-2">Projects</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/blogs"
                                >
                                    <span className="ml-2">Blogs</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}
export default Header;