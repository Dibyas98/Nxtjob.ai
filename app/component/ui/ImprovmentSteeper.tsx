import React from 'react'

function ImprovmentSteeper({title,desc,id,self}:{ title: string, desc: string,id?:number,self:number }):React.ReactNode {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col items-center'>
            <div className={`w-[2px] h-7 bg-blue-600 `} style={{backgroundColor:id==0?"transparent":"blue"}}></div>
                <div className='w-[15px] h-[20px] rounded-[50%] bg-blue-600'></div>
                <div className='w-[2px] h-full bg-blue-600'></div>
            </div>
            <div className='w-full lg:w-2/5'>
                <div className='w-full px-5 flex flex-col gap-5 py-3'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <p className='font-medium'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ImprovmentSteeper)