import React from 'react'
import {MainBox,Card,Title} from '../ui/index'
function SoundFamilar() {
    const carddetails:{title:string,desc:string,emoji:string,back?:string}[]=[
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤',
            back:'#FFFFFF'
        },
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤',
            back:'#EEEBFE'
        },
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤',
            back:'#D8F2FF'
        },
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤',
            back:'#FFEFD5'
        },
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤'
        }
    ]
  return (
    <MainBox>
        <main className='w-full flex justify-center h-[50vh] items-center'>
            <section className='w-full xl:w-4/5 lg:w-4/5 lg:px-10 gap-5 flex flex-col'>
                <Title title='Does this sound familiar' className='text-3xl font-bold lg:pl-28'></Title>
                <div className='w-full flex overflow-x-scroll gap-2 lg:px-20'>
                    {
                        carddetails.map((ele,idx)=>{
                            return <div className={`min-w-[250px] lg:w-full flex justify-end `} style={{backgroundColor:ele.back}} key={ idx}>
                            <Card
                                title={ele.title}
                                desc={ele.desc}
                                cardclassName='w-full h-[180px] '
                                emoji={ele.emoji}
                            />
                        </div>
                        })
                    }
                </div>
            </section>
        </main>
    </MainBox>
  )
}

export default SoundFamilar