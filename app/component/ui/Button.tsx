import React from 'react'
type Props={
    btn:string,
    className?:string,
}
function Button({btn,className='',...props}:Props) {
  return (
    <div className='w-full h-full flex justify-center'>
        <button className={`w-full h-full px-5 ${className}`}>{btn}</button>
    </div>
  )
}

export default Button