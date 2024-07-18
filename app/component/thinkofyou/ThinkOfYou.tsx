import React from 'react'
import { MainBox } from '../ui/index'
function ThinkOfYou(): React.ReactNode {
    return (
        <MainBox>
            <main className='w-full lg:px-20 '>
                <section className='bg-[#EDF8FE] w-full px-3  py-10'>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='text-center'>Let your friends, family, and co-workers (anonymously) rate your social skills</p>
                        <h1 className='text-5xl font-bold text-center'>Ever wounded what others think of you?</h1>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className=' progres-shadow w-full md:w-3/4 lg:w-2/4 bg-white flex items-center md:h-[20vh] h-[30vh] rounded-xl'>
                            <div className=' w-full h-5 flex justify-between relative px-5'>
                                <div className='w-[85%] md:w-[90%] lg:w-[92%] h-[1px] bg-gray-400 absolute top-[10px]'></div>
                                <div className='w-5 h-5 rounded-full bg-blue-600 z-0 relative'>
                                    <p className='absolute bg-blue-600 text-white p-2 px-4 rounded-md -top-14 -left-3'>
                                        you
                                    </p>
                                </div>
                                <div className='w-5 h-5 rounded-full bg-blue-600 z-0'>

                                </div>
                                <div className='w-5 h-5 rounded-full bg-blue-600 z-0'>

                                </div>
                                <div className='w-5 h-5 rounded-full bg-blue-600 z-0'>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainBox>
    )
}

export default ThinkOfYou