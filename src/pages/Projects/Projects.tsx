import { useState } from 'react';

import { ProjectItemProps } from './types.ts';
import NavigateBar from '../../components/NavigateBar/NavigateBar.tsx';
import { ProjectArray } from './Projects.mock.tsx';
import { ProjectItem } from './ProjectItem.tsx';

export const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string|null>(null);

  const allTags = Array.from(new Set(ProjectArray.flatMap(project => project.badges)));

  const filteredProjects = selectedTag
    ? ProjectArray.filter(project => project.badges.includes(selectedTag))
    : ProjectArray;

  return (
    <section className="container mx-auto p-2 xl:p-5">
      <NavigateBar />

      <article className="space-y-10 my-5">
        <div>
          <h1
            className="als-gorizont text-3xl xl:text-[90px] xl:leading-[100px] -tracking-[0.06em] font-black text-zinc-100">Мои
            проекты</h1>

          <p className="als-gorizont text-lg xl:text-xl font-medium xl:leading-6 text-zinc-400">Некоторые из
            проектов связаны с работой, <br /> а некоторые - с моим личным временем.</p>
        </div>

        <div>
          <h2 className="als-gorizont text-2xl font-bold text-zinc-100">Фильтр по тегам:</h2>

          <div className="flex flex-wrap mt-2">
            {allTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`m-1 als-gorizont ${selectedTag === tag ? 'bg-[#FFD600] text-black' : 'bg-black text-[#FFD600]'} text-xs font-medium px-2 py-1 uppercase rounded`}
              >
                {tag}
              </button>

            ))}
          </div>
        </div>

        <div className="grid mb-8 rounded-lg shadow-sm xl:mb-12 grid-cols-1 gap-4 mt-4">
          {filteredProjects.length > 0 ? (
            <>
              {filteredProjects.map((item:ProjectItemProps, index:number) => (
                <ProjectItem key={index} {...item} />
              ))}
            </>
          ) : (
            <p className="als-gorizont mt-4 text-zinc-400">К сожалению, я еще не сделал никакой проект</p>
          )}
        </div>

      </article>
    </section>
  );
};
