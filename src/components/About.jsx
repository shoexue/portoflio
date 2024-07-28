import React from 'react'
import aboutImg from "../assets/JHFTR.png"
import monkeytype from "../assets/monkeytype.png"
const About = () => {
  return (
    <div className='py-10 text-white bg-[#333337] h-auto' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center
                        md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='w-[400px] h-full'>
                    <img 
                        src={aboutImg}
                        alt=""
                        className='object-cover rounded-xl h-[300px] 
                                    filter grayscale brightness-50'
                    />
                </div>
            </div>

            <div>
                <div className='p2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5 ml-6'>About
                            <span className='primary-text'> Me</span>
                        </h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                            Hi! My name is Justin. I currently work at Blackberry where 
                            I focus on low level design and embedded systems. Despite that,  
                            my interest are very diverse and I love learning new things! On  
                            the side I do fullstack development, game design, and scripting. 
                            Other than that, I am also an executive for a hackathon in Toronto called
                            Hackthe6ix where I do web design. For sports, I like to play volleyball and badminton. 
                        </p>
                    </div>
                </div>

                <div className='flex mt-10 items-center gap-7'>
                    
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                            <span>+</span> 
                        </h3>
                        <p><span className='md:text-base text-xs'>Projects</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                            <span>+</span> 
                        </h3>
                        <p><span className='md:text-base text-xs'>years experience</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <a href={monkeytype}>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>200
                                <span>+</span> 
                            </h3>
                            <p><span className='md:text-base text-xs'>WPM on monkeytype</span></p>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default About
