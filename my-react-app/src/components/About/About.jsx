import React from 'react';
import successImg from '../../assets/succes.png'; 

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full bg-transparent py-[80px] px-[5%] lg:py-[100px] lg:px-[10%] flex justify-center items-center box-border"
    >
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[50px]">
        
        {/* Left Side: Text Area */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-none w-full">
          <h2 className="text-white text-[clamp(24px,6vw,35px)] lg:text-[clamp(30px,5vw,50px)] font-extrabold mb-[5px] uppercase tracking-[3px]">
            Driving Digital
          </h2>
          <h1 className="font-['Permanent_Marker',_cursive] text-[#f7df1e] text-[clamp(35px,12vw,60px)] lg:text-[clamp(40px,7vw,80px)] m-0 leading-none uppercase tracking-[5px] drop-shadow-[2px_4px_10px_rgba(0,0,0,0.3)]">
            Success
          </h1>
          <p className="text-[#cccccc] text-[15px] lg:text-[16px] leading-[1.8] mt-[20px] lg:mt-[25px] max-w-[600px]">
            At <span className="text-[#f7df1e] font-black">Leadspktechnologies</span>, we help businesses 
            scale through innovative technology and strategic solutions. Having partnered with 
            numerous companies, we have a proven track record of driving growth and 
            transforming visions into high-impact market results.
          </p>
        </div>

        {/* Right Side: Image Area */}
        <div className="flex-1 flex justify-center lg:justify-end items-center order-2 lg:order-none w-full">
          <img 
            src={successImg} 
            alt="Driving Digital Success" 
            className="w-[80%] lg:w-full max-w-[250px] lg:max-w-[450px] h-auto object-contain drop-shadow-[0px_15px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 ease hover:-translate-y-[10px]" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;