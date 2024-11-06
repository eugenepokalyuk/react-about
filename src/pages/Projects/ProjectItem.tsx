import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { ProjectItemProps } from './types.ts';

export const ProjectItem:FC<ProjectItemProps> = ({ urlGitHub, badges, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}
         className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-10'} flex flex-col items-start justify-start text-center bg-[#ffffff08] p-3 xl:p-4 rounded-[16px]`}>
      <div className="flex flex-col justify-between h-full w-full">
        <div className="mx-auto mb-4 text-gray-400 mt-4 w-full">
          <h3
            className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">{title}</h3>

          <p
            className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">{description}</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div
            className="flex flex-row flex-wrap justify-start items-center mr-auto gap-2 mb-4 w-full xl:w-4/12">
            {badges.map((badge) => {
              return (
                <span
                  className="als-gorizont bg-black text-[#FFD600] text-xs font-medium px-2 py-1 uppercase rounded">{badge}</span>
              );
            })}
          </div>

          <div className="flex flex-row justify-end items-end gap-x-2">
            <div className="text-nowrap">
              <Link to={urlGitHub} target="_blank" className="h-full">
                <p
                  className="als-gorizont w-full bg-[#FFD600] text-black text-xs font-medium px-2 py-1 uppercase rounded hover:brightness-90">{'Поглядеть код'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
