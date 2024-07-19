import React from 'react'
import { MainBox,Title,ParaCard } from '../ui/index'
function BeTheBest() {
    return (
        <MainBox>
            <main className='w-full flex justify-center h-[50vh] items-center'>
                <section className='w-full md:w-3/4 lg:w-3/4 flex flex-col md:flex-row lg:flex-row justify-center gap-5'>
                    <div className='w-full md:w-3/5 lg:w-1/4'>
                        <Title title='Be the best you with EQ' className='text-2xl font-bold text-center md:w-5/5 lg:w-4/5 lg:text-left md:text-left'></Title>
                    </div>
                    <ParaCard para='Not having your own emotions under control might be holding you back.' contclassName='w-full md:w-3/5 lg:w-1/4' pclassName='text-base font-medium lg:w-4/5 text-center lg:text-left md:text-left'></ParaCard>
                    <ParaCard para='Additionally, not understanding those of others stops you from being parent, friend you can be.' contclassName='w-full md:w-3/5 lg:w-1/4' pclassName='text-base font-medium lg:w-4/5 text-center lg:text-left md:text-left'></ParaCard>
                </section>
            </main>
        </MainBox>
    )
}

export default BeTheBest