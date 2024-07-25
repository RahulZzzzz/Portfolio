import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

function Footer() {
  return (
    <footer className='w-full pt-20 pb-10 overflow-hidden' id='contact'>
        <div className='w-full absolute left-0 bottom-0 max-h-[700px]'>
            <img src="/footer-grid.svg" alt="grid" 
                className='w-full h-full opacity-80'
            />
        </div>

        <div className=' flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s Discuss how I can help you achieve your goals</p>
            <a href="mailto:rjrahul1855@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className=' flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2024 Rahul
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={String(profile.id)} 
                            width={20} height={20}
                        />
                    </div>
                ))}
            </div>
        </div>

    </footer>
  )
}

export default Footer