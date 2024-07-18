'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react';


// PROPS TYPE DEFINE
type Props = {
  emoji?: string | StaticImageData;
  title: string;
  desc: string;
  className?: string;
  cardclassName?: string;
  titleclassName?: string;
  descclassName?: string;
};

const Card: React.FC<Props> = ({
  emoji,
  title,
  desc,
  className = '',
  cardclassName = '',
  titleclassName = '',
  descclassName = '',
}) => {
  return (
    <section className={`w-full h-full rounded-xl p-6 lg:h-fit ${cardclassName}`}>
      <div className={`w-full h-full flex flex-col gap-3 ${className}`}>
        {emoji && (typeof emoji === 'string' ? (
          <h1>{emoji}</h1>
        ) : (
          <Image src={emoji} alt='img' width={50} height={50} />
        ))}
        <h2 className={`text-lg font-semibold ${titleclassName}`}>{title}</h2>
        <p className={`font-medium text-[#a09898] text-xs ${descclassName}`}>{desc}</p>
      </div>
    </section>
  );
};

export default Card;
