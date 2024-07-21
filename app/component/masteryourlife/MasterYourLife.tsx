import React from 'react'
import {MainBox,Title} from "../ui/index"
import Image from 'next/image'
function MasterYourLife() {
  return (
    <MainBox>
        <main className='w-full px-3 h-[90vh]'>
            <section className='w-full h-full bg-[#EEEBFE] rounded-xl flex flex-col md:flex-row lg:flex-row gap-16'>
                <div className='w-full flex items-center px-6'>
                    <Title title='Master your life by mattering emotions' className='text-3xl sm:text-4xl lg:text-6xl px-1 lg:px-10 w-4/5'></Title>
                    <div></div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] border-2 rounded-full border-dashed border-white flex justify-center items-center relative ghost' >
                        <div className='w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] bg-[#E2DBFD]  rounded-full'>
                        </div>
                        <div className='absolute -right-5'>
                            <Image src='/blue-ghost.webp' alt='img1' width={50} height={50}></Image>
                        </div>
                        <div className='absolute -top-7'>
                            <Image src='/red-ghost.webp' alt='img2' width={50} height={50}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </MainBox>
  )
}

export default MasterYourLife