import React from 'react'
import { MainBox, Title, ParaCard } from '../ui/index'
function EqBeatIq(): React.ReactNode {
    return (
        <MainBox>
            <main className='w-full flex justify-center h-[50vh]'>
                <section className='w-full md:w-3/4 lg:w-3/4 flex flex-col md:flex-row lg:flex-row justify-center gap-5 h-[40vh] md:items-center lg:items-center xl:items-center'>
                    <div className='w-full md:w-3/5 lg:w-1/4'>
                        <Title className='text-2xl font-bold text-center md:w-5/5 lg:w-4/5 lg:text-left md:text-left' title='EQ beats IQ'></Title>
                    </div>
                    <ParaCard para='People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships' contclassName='w-full md:w-3/5 lg:w-1/4 text-[#a09898] ' pclassName='text-base font-medium lg:w-4/5 text-center lg:text-left md:text-left' ></ParaCard>
                    <ParaCard para='They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year' pclassName='text-base font-medium lg:w-4/5 text-center lg:text-left md:text-left' contclassName='w-full md:w-3/5 lg:w-1/4 text-[#a09898] '></ParaCard>
                </section>
            </main>
        </MainBox>
    )
}

export default EqBeatIq