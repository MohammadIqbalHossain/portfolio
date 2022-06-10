import React from 'react';
import './AboutMe.css'
import image from '../../../src/images/fro-remove-removebg.png';

const AboutMe = () => {
    return (
        <div className="" data-aos="fade-up">
            <h1 className="text-ceter text-3xl font-bold my-5">About me</h1>
            <div className="fancy-border md:w-[700px] h-[600px] border-2 border-gray-700 mx-auto p-10  text-left overflow-hidden xs:mx-10 my-10">
                <h1>Hello</h1>
                <p className="mb-10">
                    You’re undoubtedly aware that you can set an element’s border-radius to four values and that the order is top, right, bottom, left in shorthand. However, did you know that you may set up to eight variables if they are separated? Each corner may have up to two values, as seen in this example.
                </p>

                <p className="">
                    You’re undoubtedly aware that you can set an element’s border-radius to four values and that the order is top, right, bottom, left in shorthand. However, did you know that you may set up to eight variables if they are separated? Each corner may have up to two values, as seen in this example.
                </p>

                <p className="text-right my-10">-Mohammad Iqbal</p>
                <div className="mb-[500px]">
                    <img src={image} className="w-[150px] mb-102"  alt="Hello"/>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;