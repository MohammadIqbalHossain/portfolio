import React from 'react';
import bannerImage from '../../images/herobg.webp'
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Banner.css'

const Banner = () => {
    return (
        <div className="w-full flex justify-around items-center h-screen bg-[a]">
            <div className="md:w-[500px] px-10">
                <h1 className="thicker-font md:text-[50px] text-[40px] text-left xs:leading-10 leading-tight">Hello, <br /> I am <span className="gradinet-text">Mohammad Iqbal Hossain</span> I am a web Developer</h1>

                <p className="text-left  py-5 text-2xl text-gray-400">
                    Showcase your skills with practical development experience and land the coding career of your dreams
                </p>

                <button className="bg-blue-400 flex items-center font py-3 px-10 font-bold align-item-left rounded-3xl mb-5" >
                    <a  href="https://drive.google.com/file/d/11tofjXZEhTKN9VybL-MpvfOQ_nQeXDXJ/view?usp=sharing" target="blank">
                        Download Resume 
                    </a>
                    <AiOutlineArrowRight className="ml-5 font-bold" />
                </button>

            </div>
            <div className="md:w-[550px] ">
                <img className="hidden md:block" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;