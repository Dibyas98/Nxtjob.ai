import React from 'react';
import { MainBox,Title } from '../ui/index';

function BeforeWeGetStart() {
  return (
    <MainBox>
      <main className='w-full h-[60vh] flex justify-center'>
        <section className='w-full md:w-3/4 lg:w-2/4 xl:w-2/4 h-full flex flex-col items-center justify-center gap-5 lg:gap-2 xl:gap-2'>
          <h3 className='font-medium'>We take privacy seriously</h3>
          <h1 className='text-2xl font-bold'>Before you get started</h1>
          <h4 className='text-xl text-center'>&quot;We won&apos;t share your answer with anyone (and won&apos;t ever tell you which friends said what about you)&quot;</h4>
          <p>with love.</p>
          <button className='bg-black text-white rounded-2xl p-2'>start a test</button>
          <p>Take only 5 minutes</p>
        </section>
      </main>
    </MainBox>
  );
}

export default BeforeWeGetStart;
