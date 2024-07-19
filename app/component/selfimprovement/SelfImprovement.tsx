import React from 'react'
import { MainBox, Title, ImprovmentSteeper } from '../ui/index'

const improvement: { title: string, des: string }[] = [
    {
        title: `It's not as easy as 1-2-3.`,
        des: `The journey of change may be long, but our sessions are quick. We get to the point and point and tell you want to know (and noting else).`
    },
    {
        title: "Old habits are hard to break",
        des: "And bad die hard. Fortunately, we give you great, science-backed techniques to use"
    },
    {
        title: "You and your motivation don't have a long-term relation",
        des: "Luckily, we can proactively prepare you for marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals"
    },
    {
        title: "Books just don't offer partical solutions.",
        des: "Remember when you learned to ride a hike just by reading? yeah we don't either"
    }
]
function SelfImprovement() {
    return (
        <MainBox>
            <main className='w-full h-fit lg:h-[90vh] flex items-center py-10'>
                <section className='w-full flex flex-col items-center'>
                    <div className='w-full lg:w-3/5 py-8'>
                        <Title title='Self-improvement. Ugh.' className='text-4xl'></Title>
                    </div>
                   
                    <div className='w-full'>
                        {
                            improvement.map((self, idx) => {
                                return <ImprovmentSteeper title={self.title} desc={self.des} id={idx} self={improvement.length}></ImprovmentSteeper>
                            })
                        }
                    </div>
                </section>
            </main>
        </MainBox>
    )
}

export default React.memo(SelfImprovement)