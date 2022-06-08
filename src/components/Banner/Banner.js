import React from 'react';
import bannerImage from '../../images/herobg.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div className="w-full flex justify-around items-center h-screen bg-[#F5F9FF]">
            <div className="md:w-[500px] ">
                <h1 className="thicker-font text-[50px] text-left">Hello, <br /> I am <span className="gradinet-text">Mohammad Iqbal Hossain</span> I am a web Developer. How can I help you?</h1>
            </div>
            <div className="md:w-[550px] ">
                <img className="" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;