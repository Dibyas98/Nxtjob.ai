import React from 'react'
import { MainBox } from '../ui/index'
import { text } from 'stream/consumers'
import { Span } from 'next/dist/trace'
const stepper: { text: string, color: string,position?:string }[] = [
    {
        text: "You",
        color: "6442EF",
        position:'-top-11 -left-8'
    },
    {
        text: "Anonymonos 1",
        color: "40C2FC",
        position:"top-8"
    },
    {
        text: "Anonymonos 2",
        color: "FDB338",
        position:"-top-11"
    },
    {
        text: "Anonymonos 3",
        color: "59C798",
        position:"top-8"
    }
]
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
                                <div className='w-[90%] sm:w-[92%] md:w-[92%] lg:w-[90%] xl:w-[91%] h-[1px] bg-gray-400 absolute top-[10px]'></div>
                                {
                                    stepper.map((ele, idx) => {
                                        return <div className={`w-5 h-5 rounded-full  z-0 relative text-wrap`} style={{backgroundColor:`#${ele.color}`}}>
                                            <p className={`text-xs flex gap-1  absolute text-white py-2 px-4 rounded-md  ${ele.position}`} style={{backgroundColor:`#${ele.color}`}}>
                                                {
                                                    ele.text.split(" ").map((el) => <span>{el} </span>)
                                                }
                                            </p>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainBox>
    )
}

export default ThinkOfYou