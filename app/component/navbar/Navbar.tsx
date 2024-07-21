import React, { ReactNode } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Button from '../ui/Button'
import { AlignJustify } from 'lucide-react';

const LargeScreen = ({ children }: { children: ReactNode }) => {
    return (
        <nav className='w-full flex items-center h-full px-4'>
            <div className='w-full flex items-center h-full  justify-normal lg:justify-center xl:justify-end gap-5 md:w-1/6 lg:w-2/6 '>
                <div className='xl:hidden md:hidden '>
                    {children}
                </div>
                <Image src={"/logo.PNG"} alt='Logo' width={50} height={50}></Image>
            </div>
            <div className='w-full hidden md:flex xl:block '>
                <Menu ></Menu>
            </div>
            <div className='w-full hidden sm:w-2/5 md:w-2/6 lg:w-2/6'>
                <Button btn='Download app' className='bg-black text-white  lg:w-4/5 xl:w-3/4 rounded-3xl py-1'>
                </Button></div>
        </nav>
    )
}

const SmallScreem = () => {
    return (
        <section className='w-full'>
            <div className='w-full'>
                <AlignJustify></AlignJustify>
            </div>
            {/* <div className='fixed top-16 left-0 w-[90vw]'>
                <div className='w-full h-screen border-4 px-5 py-5'>
                    <Menu></Menu>
                </div>
            </div> */}
        </section>
    )
}
function Navbar() {
    return (
        <section className='w-full  h-16 fixed top-0 bg-white z-10'>
            <LargeScreen>
                <SmallScreem></SmallScreem>
            </LargeScreen>
        </section>
    )
}

export default Navbar