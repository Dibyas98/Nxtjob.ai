import React, { useId } from 'react'
import { MainBox } from "../ui/index"
import VacenciCard from './VacenciCard'
function Vaccencies(): React.ReactNode {
    const vac: {
        post_name: string,
        time?: string,
        type?: string,
        salary: string
    }[] = [
            {
                post_name: 'Senior Full Engineer',
                salary: '$65-85k,0.5-1.50% equity share options'
            },
            {
                post_name: 'Senior Designer',
                salary: '$40-55k,0.25-0.50% equity share options'
            },
            {
                post_name: 'Superstar Intern',
                salary: '$20-24k,0.5-1.50% equity share options'
            }
        ]
        const id=useId()
    return (
        <MainBox>
            <main className='w-full h-[60vh] flex justify-center py-8'>
                <section className='w-full lg:w-3/4'>
                    <h1 className='w-full text-3xl font-bold'>Open vacancies</h1>
                    <div className='flex flex-col md:flex-row lg:flex-row items-center w-full sm:items-center gap-5 md:gap-0 h-[35vh] md:h-[40vh] overflow-y-scroll md:overflow-auto lg:h-auto lg:overflow-auto'>
                        {
                            vac.map((ele, idx) => {
                                return <div className='w-full sm:w-3/5 md:w-2/5 lg:w-2/5 p-5' key={id+idx}>
                                    <VacenciCard post_name={ele.post_name} salary={ele.salary} />
                                </div>
                            })
                        }
                    </div>
                </section>
            </main>
        </MainBox>
    )
}

export default Vaccencies