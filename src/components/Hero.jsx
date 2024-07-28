import React from 'react'
import profilepic from '../assets/ship_4.png'
import cv from '../assets/Justin_Xue_CV.pdf'

import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { SiDevpost } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div>
      <div className='my-7 sm:my-0 max-w-[1500px] h-auto mx-auto flex flex-col 
                        reverse sm:flex-row justify-center align-center' id='home'
                        style={{
                            background: 'linear-gradient(to bottom, #fafff0, #9ACDDD)', // Example gradient
                          }}
                        >
        <div className='flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-black-200'>Hi! I am Justin Xue</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                <TypeAnimation
                    style={{
                        width:'600px',
                        height:'82px',
                        display: 'block'
                    }}
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Web Designer",
                        1000,
                        "Student",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    />
            </h1>
            <div className='flex justify-start items-center'>
                <p className='md:text-5xl px-3 sm:text-4xl text-xl font-bold text-gray-500'></p>
            </div>
            <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                <a href="https://linkedin.com/in/justin-xue5/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/shoexue" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub/>
                </a>
                <a href="https://devpost.com/justinxue2005?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                    <SiDevpost/>
                </a>
            </div>

            <div class="z-0 relative inline-flex group my-3">
                <div class=" absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r 
                            from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-x1 blur-lg group-hover:opacity-100 
                            group-hover:-inset-1 group-hover:duration-200">
                </div>
                <a href={cv} title="Download CV" role="button"
                    class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg 
                            font-bold text-white transition-all duration-200 button-bg-primary-color font-pj rounded-x1 
                            focus:outline-none focus: ring-2 focus:ring-offset-2 focus: ring-gray-900">Download CV
                </a>
            </div>
        </div>

        <div class="relative inline-flex group my-3">
                <div class=" absolute transition-all duration-1000 opacity-70 -inset-px bg-gardient-to-r 
                            from-[##44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
    
        </div>
<div className='my-auto'>
    <img className='w-[400px] sm:w-[600px] mx-auto h-auto ml-[20px] sm:ml-[40px]'
         src={profilepic} alt="profile pic"/>
</div>

      </div>
    </div>
  )
}

export default Hero
