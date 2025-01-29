import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';
import portrait from '@/public/portrait.jpg';
import portrait1 from '@/public/Untitled design (14).png';
const Hero = () => {
  return (
    <div className="pb-10 pt-6 sm:pb-20 sm:pt-36 bg-white">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-balck-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center "
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-500
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center relative my-10 z-10 text-black/0.9">
        <div className="flex justify-center items-center md:justify-center md:items-center">
          <Image
            src={portrait}
            alt="portrait"
            width={250}
            height={100}
            className="rounded-sm shadow-lg object-top w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 md:pt-20"
          />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi! I'm Abel Alebachew, a Web developer based in Addis Ababa, Ethiopia."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I Love Transforming Ideas into Interactive Digital Experiences
          </p>

          <a href="#about">
            <MagicButton
              title="Take a peek"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
