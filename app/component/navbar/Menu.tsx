import React, { useId } from 'react'

function Menu() {
    const id=useId()
    const menu = ["Emotions","Manifesto","Self-awareness test","Work With Us"]
  return (
    <section className='w-full text-sm'>
        <ul className=' w-full flex gap-8 font-semibold flex-col md:flex-row justify-center xl:flex-row'>
            {
                menu.map((el,idx)=> <li key={id+idx} className='flex items-center'>{el}</li>)
            }
        </ul>
    </section>
  )
}

export default Menu