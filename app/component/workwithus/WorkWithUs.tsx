import React, { useId } from 'react'
import { MainBox, Title, Card } from '../ui/index'

function WorkWithUs() {
    const id = useId();
    const carddetails: { title: string, desc: string }[] = [
        {
            title: 'Power through, even when the going gets tough',
            desc: 'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.'
        },
        {
            title: 'Learn more about who you are and where you want to go',
            desc: 'We ask the right questions to help you better understand why you do things the way you do.'
        },
        {
            title: 'Play and grow together with others on the same journey',
            desc: 'We create opportunities for you to connect and grow with like-minded individuals.'
        },
        {
            title: 'Master how to make it happen in real life',
            desc: 'We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.'
        },
        {
            title: 'Learn about practical skills that you can actually use in real life',
            desc: 'We teach you smart psychological techniques and habit-forming strategies that are easy to apply.'
        },
        {
            title: 'Get support that\'s made for your needs',
            desc: 'We build your personal roadmap of lessons and actions towards your goals.'
        }
    ];
    return (
        <MainBox>
            <main className='bg-[#f3f1ff] w-full h-[90vh]  py-5 flex flex-col lg:flex-row xl:flex-row'>
                <div className='w-full'>
                    <Title title='Work with us'></Title>
                    <div className='w-full'>
                        <div className='w-full bg-white'>
                            <div className=''>
                                
                            </div>
                        </div>
                    </div>

                </div>
                    <div className='w-full h-5/6 flex flex-col items-center px-5 gap-5'>
                        <Title title='ahead' className='text-[#6541f2] lg:text-right'></Title>
                        <div className='w-full h-[45vh] lg:h-full overflow-x-scroll md:overflow-y-scroll lg:overflow-y-scroll flex-row flex lg:flex-col justify-start gap-5 overflow-y-hidden lg:overflow-x-visible  sm:px-5 '>
                            {
                                carddetails.map((ele, idx) => {
                                    return <div className='min-w-[250px] lg:w-full flex justify-center' key={id + idx}>
                                        <Card
                                            title={ele.title}
                                            desc={ele.desc}
                                            cardclassName='w-full lg:w-4/5 xl:w-3/5 h-[190px]'
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </div>
            </main>
        </MainBox>
    )
}

export default WorkWithUs