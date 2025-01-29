'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { projects } from '@/data';
import { PinContainer } from './ui/Pin';
import bgImg from '@/public/bg.png';
import Image from 'next/image';
import Link from 'next/link';

const RecentProjects = () => {
  return (
    <div className="py-20 sm:px-10 px-5 mx-auto bg-[#0d1c22]" id="project">
      <h1 className="heading text-white">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer
             title={item.title}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  // style={{ backgroundColor: '#13162D' }}
                  style={{ backgroundColor: 'white' }}
                >
                  <Image src={bgImg} alt="bgimg" width={500} height={500} />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-full h-full"
                  width={500}
                  height={500}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 sm:m-0 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Live Site
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
