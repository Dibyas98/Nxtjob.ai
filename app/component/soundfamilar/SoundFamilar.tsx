import React from 'react'
import {MainBox,Card,Title} from '../ui/index'
import Image from 'next/image'
function SoundFamilar() {
    const carddetails:{title:string,desc:string,emoji:string,back?:string,text?:string}[]=[
        {
            title:'You argue with a colleauge',
            desc:'You get angry and defensive, instead of staying open and working towards common ground.',
            emoji:'😤',
            back:'#FFFFFF'
        },
        {
            title:'You got s promotion at work',
            desc:`Yor question yourself and wounder when they'll realize you're an unqualified imposter, instead of trusting youself & your abilities`,
            emoji:'😲',
            back:'#6341EF',
            text:'white'
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
                <div className='w-full flex items-center gap-4'>
                <Title title='Does this sound familiar...' className='text-3xl font-bold lg:pl-28 w-fit'></Title>
                <Image src='/brown-ghost.png' alt='img5' width={80} height={80}></Image>
                </div>
                <div className='w-100vh overflow-hidden soundfamilar'>
                <div className='w-full flex overflow-x-scroll gap-10 lg:px-20 scrollbar-hide h-[400px] items-center'>
                    {
                        carddetails.map((ele,idx)=>{
                            return <div className={`min-w-[250px] lg:w-full h-fit flex justify-end rounded-lg hover:scale-125 hover:-rotate-[25deg]`} style={{backgroundColor:ele.back,color:ele.text?ele.text:'black'}} key={ idx}>
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