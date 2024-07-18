import React, { useId } from 'react'
import { MainBox, Title, Card } from '../ui/index'
import { title } from 'process';
import about from './workwithusabout.png'

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

    const workwithus = [
        {
            title: 'About',
            desc: `At ahead our goal is to make self-improvenment fun and lasting. We know there's a way hoe to make it work. And that's what aHead is all about!`,
            cardclass:'bg-white',
            emoji:about
        },
        {
            title: 'Product',
            desc: `Sure, you could spend ages reading books or sitting in seminars on how to become  better spouse, parent, or manager - like we did...`,
            cardclass:'bg-[#FEF7F1]',
            emoji:''
        }
    ]
    return (
        <MainBox>
            <main className='bg-[#f3f1ff] w-full lg:h-[150vh] xl:h-[120vh]  py-16 flex flex-col lg:flex-row xl:flex-row lg:px-44 gap-10 lg:gap-0 px-3 justify-center'>
                <div className='w-full md:px-10 flex flex-col gap-6 rounded-lg' >
                    <Title title='Work with us' className='text-5xl' ></Title>
                    <div className='w-full flex '>
                        <div className='w-5/5  bg-white rounded-xl shadow'>

                            {
                                workwithus.map((ele, idx) => {
                                    return <div className='w-full' key={id+60+idx}>
                                        <Card
                                            title={ele.title}
                                            desc={ele.desc}
                                            className=''
                                            titleclassName='text-4xl'
                                            descclassName='text-[1.1rem] leading-6'
                                            cardclassName={`${ele.cardclass} py-10`}
                                            emoji={ele.emoji}
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full h-5/6 flex flex-col items-center px-5 gap-5 '>
                    <Title title='ahead' className='text-[#6541f2] lg:text-right text-5xl '></Title>
                    <div className='w-full h-[45vh] lg:h-full overflow-x-scroll md:overflow-y-scroll lg:overflow-y-scroll flex-row flex lg:flex-col justify-start gap-5 overflow-y-hidden lg:overflow-x-visible  sm:px-5 '>
                        {
                            carddetails.map((ele, idx) => {
                                return <div className='min-w-[250px] lg:w-full flex justify-end' key={id + idx}>
                                    <Card
                                        title={ele.title}
                                        desc={ele.desc}
                                        cardclassName='w-full lg:w-4/5 xl:w-3/5 h-[180px] bg-white '
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>
            </main>
        </MainBox >
    )
}

export default WorkWithUs