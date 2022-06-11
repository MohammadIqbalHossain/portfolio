import React from 'react';
import './AboutMe.css'
import image from '../../../src/images/fro-remove-removebg.png';

const AboutMe = () => {
    return (
        <div className="" data-aos="fade-up">
            <h1 className="text-ceter text-3xl font-bold my-5">About me</h1>
            <div className="fancy-border md:w-[700px] h-[700px] border-2 border-gray-700 mx-auto p-10  text-left overflow-hidden xs:mx-10 my-10">
                <h1>Hello,</h1>
                <p className="mb-10">
                    You know my name right, I am 20 years old boy. The first time when I heard about web development is from a youtube video. I saw the person who was coding he is making something really beautiful. After 2 hours of video, I acknowledge that YouTuber made something extraordinary that blows my mind. I got interested in development. I started learning
                </p>

                <p className="">
                    That is the first time, I started learning HTML on my phone. I requested my parents to buy me a computer. After requesting for a month they gave me money. Then my journey started. In 2 months I completed the "responsive web design" course and the "Javascript algorithm and data structure" course from "freeCodeCamp" I watched tutorials after tutorials. then I got into the "Complete web development with Jahnkar mahbub" course. Now, after eight-month I can make a basic full-stack website. I am sure if I could get the opportunity, My enthusiasm for coding would grow. I want to explore.
                </p>

                <p className="text-right my-10">-Mohammad Iqbal</p>
                <div className="mb-[500px] hidden md:block">
                    <img src={image} className="w-[150px] mb-102" alt="Hello" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;