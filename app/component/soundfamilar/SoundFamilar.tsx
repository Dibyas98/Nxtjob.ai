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
        <main className='w-full flex justify-center h-[80vh] items-center'>
            <section className='w-full xl:w-4/5 lg:w-4/5 lg:px-10 gap-5 flex flex-col'>
                <Title title='Does this sound familiar' className='text-3xl font-bold lg:pl-28'></Title>
                <div className='w-100vh overflow-hidden soundfamilar'>
                <div className='w-full flex overflow-x-scroll gap-10 lg:px-20 scrollbar-hide h-[400px] items-center'>
                    {
                        carddetails.map((ele,idx)=>{
                            return <div className={`min-w-[250px] lg:w-full h-fit flex justify-end rounded-lg hover:scale-125 hover:-rotate-[25deg]`} style={{backgroundColor:ele.back,transitionDelay:'5sec'}} key={ idx}>
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
                </div>
            </section>
        </main>
    </MainBox>
  )
}

export default SoundFamilar