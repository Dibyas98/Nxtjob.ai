import React from 'react'

// PROPS TYPE DEFINE
type Props = {
    emoji?:string,
    title:string,
    desc:string,
    className?:string,
    cardclassName?:string
}

function Card({emoji,title,desc,className,cardclassName}:Props):React.ReactNode {
  return (
    <section className={`w-full h-full bg-white rounded-xl p-6 lg:h-fit ${cardclassName}`}>
        <div className={`w-full h-full flex flex-col gap-3 ${className}`}>
            {
                emoji && <h1>{emoji}</h1>
            }
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='font-medium text-xs text-[#a09898]'>{desc}</p>
        </div>
    </section>
  )
}

export default Card