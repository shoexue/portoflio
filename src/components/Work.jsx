import React from 'react'
import proj1 from '../assets/proj_1.png'
import proj2 from '../assets/proj_2.png'
import proj3 from '../assets/proj_3.png'
import proj4 from '../assets/proj_4.png'
import proj5 from '../assets/proj_5.png'
import proj6 from '../assets/proj_6.png'

const Work = () => {
  return (
    <div class='mt-5 py-6 max-w-[1200px] mx-auto ' id='projects'>

        <div class="mx-auto px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between">
                <div class='flex flex-col gap-4 '>
                    <h2 class='text-2xl lg:text-4xl text-black'>
                        My <span>Projects</span>
                    </h2>
                    <p class='text-gray-500'>
                        These are my latest projects
                    </p>
                </div>
            </div>
            <div class='grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8'>

                <a href="https://devpost.com/software/melodica-y0267b" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>
                <a href="https://github.com/shoexue/Timeowt" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj4} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>                
                <a href="https://shoexue.itch.io/aliex-in-the-abyss" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj3} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>               
                <a href="https://devpost.com/software/phonefix-ai" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>
                <a href="https://devpost.com/software/be-our-guest" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj5} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>
                <a href="https://shoexue.itch.io/league-of-benching" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h 80">
                    <img src={proj6} alt="" class="h-full w-full object-cover object-center transition
                                                    duration-200 group-hover:scale-110"/>
                </a>
            </div>

        </div>
      
    </div>
  )
}

export default Work
