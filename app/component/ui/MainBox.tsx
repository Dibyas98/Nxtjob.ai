import React, { ReactNode } from 'react'

function MainBox({children}:{children:ReactNode}):React.ReactNode {
  return (
    <section className='px-5'>
        {children}
    </section>
  )
}

export default MainBox