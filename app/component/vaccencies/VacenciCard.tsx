import React from 'react'
type Props = {
  post_name: string,
  time?: string,
  type?: string,
  salary: string
}
function VacenciCard({ post_name, time = 'Full-time position', type = 'Berlin or Remote', salary }: Props): React.ReactNode {
  return (
    <div className='w-full bg-[#f2f0e6] p-5 rounded-lg h-[150px] md:h-[180px] hover:h-[250px] overflow-hidden btn'>
      <h1 className='text-lg font-semibold py-3'>{post_name}</h1>
      <ul className='text-xs font-medium flex flex-col gap-1'>
        <li>{time}</li>
        <li>{type}</li>
        <li>{salary}</li>
      </ul>
      <div className='py-16'>
      <button className='bg-black text-white rounded-xl p-2'>Some details</button>
      </div>

    </div>
  )
}

export default VacenciCard