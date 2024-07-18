import React from 'react'
import { MainBox } from '../ui/index'
import Ball from '../ui/Ball'

function MeetTheAhead(): React.ReactNode {
    return (
        <MainBox>
            <main className='w-full flex justify-center'>
                <section className='w-full lg:w-3/5 bg-[#FEF7F1] rounded-xl pt-5'>
                    <div className='w-full p-10 flex flex-col gap-5'>
                        <p>Built out of frustration</p>
                        <h1 className='text-4xl font-bold'>Meet the ahead app</h1>
                    </div>
                    <div className='flex w-full h-[60vh] items-center'>
                        <Ball></Ball>
                        <div className='w-1/2 flex flex-col gap-5 px-2 lg:px-10 font-medium'>
                            <p>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
                            <p>Think of it as a pocket cheerleader towards a better ,more fulfilling</p>
                        </div>
                    </div>
                </section>
            </main>
        </MainBox>
    )
}

export default MeetTheAhead