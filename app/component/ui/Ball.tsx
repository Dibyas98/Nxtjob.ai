import React from 'react'
import Image from 'next/image'

function Ball() {
    return (
        <div className='w-1/2 h-full  relative overflow-hidden'>
            <div className='w-52 h-52 md:w-56 md:h-56 lg:w-56 lg:h-56 bg-[#FAE8DC] rounded-full absolute top-36 -left-10 md:top-20 md:-left-16 lg:top-20 lg:-left-16 '>
                <div className='w-full h-full relative '>
                    <div className='w-28 h-28 md:w-36 md:h-36 lg:w-36 lg:h-36 absolute bg-white -right-5 md:-right-20 md:-top-8 lg:-right-20 lg:-top-8 rounded-full border-4 md:border-[15px] lg:border-[15px] border-[#FEF7F1] flex justify-center items-center'>
                        <Image src='/purpel-ghost.JPG' alt='img-3' width={50} height={50}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ball