import React from 'react'
import {MainBox,Title} from "../ui/index"
function MasterYourLife() {
  return (
    <MainBox>
        <main className='w-full px-3 h-[90vh]'>
            <section className='w-full h-full bg-[#EEEBFE] rounded-xl flex flex-col md:flex-row lg:flex-row '>
                <div className='w-full flex items-center px-6'>
                    <Title title='Master your life by mattering emotions' className='text-3xl sm:text-4xl lg:text-6xl px-1 lg:px-10 w-4/5'></Title>
                    <div></div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] border-2 rounded-full border-dashed border-white flex justify-center items-center' >
                        <div className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] bg-[#E2DBFD]  rounded-full'>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </MainBox>
  )
}

export default MasterYourLife