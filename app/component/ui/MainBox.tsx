import React, { ReactNode } from 'react'

function MainBox({children,className}:{children:ReactNode,className?:string}):React.ReactNode {
  return (
    <section className={`px-5 w-full ${className}`}>
        {children}
    </section>
  )
}

export default MainBox