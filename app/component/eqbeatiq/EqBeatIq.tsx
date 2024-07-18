import React from 'react'
import { MainBox } from '../ui/index'
function EqBeatIq():React.ReactNode {
  return (
    <MainBox>
    <main className='w-full flex justify-center'>
        <section className='w-full md:w-3/4 lg:w-3/4 flex flex-col md:flex-row lg:flex-row justify-center gap-5 h-[50vh] md:items-center lg:items-center xl:items-center'>
            <div className='w-full md:w-3/5 lg:w-1/4'>
                <h1 className='text-2xl font-bold text-center md:w-5/5 lg:w-4/5 lg:text-left md:text-left'>EQ beats IQ</h1>
            </div>
            <div className='w-full md:w-3/5 lg:w-1/4 text-[#a09898]'>
                <p className='text-base font-medium lg:w-4/5 text-center lg:text-left md:text-left'>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships</p>
            </div>
            <div className='w-full md:w-3/5 lg:w-1/4'>
                <p  className='text-base font-medium lg:w-4/5 text-center md:text-left lg:text-left text-[#a09898]'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year</p>
            </div>
        </section>
    </main>
</MainBox>
  )
}

export default EqBeatIq