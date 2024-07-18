import React from 'react'

function Title({title,className=''}:{title:string,className?:string}):React.ReactNode {
  return (
   <h1 className={`w-full font-bold text-2xl ${className}`}>{title}</h1>
  )
}

export default Title