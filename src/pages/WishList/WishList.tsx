import { useInView } from 'react-intersection-observer';

import NavigateBar from '../../components/NavigateBar/NavigateBar.tsx';
import { Telegram } from '../../components/modules/Links/Telegram.tsx';
import { WishListItems } from './WishList.mock.tsx';

export const WishList = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="container mx-auto p-2 xl:p-5">
      <NavigateBar />

      <article ref={ref}
               className={`space-y-10 my-5 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-10'}`}>
        <div>
          <h1
            className="als-gorizont text-3xl xl:text-[90px] xl:leading-[100px] -tracking-[0.06em] font-black text-zinc-100">{'Wish List'}</h1>
          <p
            className="als-gorizont text-lg xl:text-xl font-medium xl:leading-6 text-zinc-400 xl:w-6/12">{'Список вещей и желаний, которые хотелось бы осуществить'}</p>
        </div>

        {WishListItems.map((item, index) => (
          <div key={index} className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
            <div
              className={`flex items-center justify-center w-full ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full bg-[#FFD600]/[.4] h-[32rem] object-cover object-center rounded"
              />
            </div>

            <div
              className={`flex flex-col justify-between h-full bg-[#FFD600]/[.05] rounded p-10 w-full ${index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'}`}>
              <div className="mx-auto mb-4 text-gray-400 w-full">
                <h3
                  className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">{item.title}</h3>

                <p
                  className="mt-2 als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">{item.description}</p>

                {!!item?.links?.length && (
                  <div className="mt-2">
                    <h4 className="text-xl font-semibold text-zinc-200">{'Источники:'}</h4>

                    <ul className="list-disc list-inside space-y-1">
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link} target="_blank" rel="noopener noreferrer"
                             className="text-xl text-blue-400 hover:underline">
                            {`Ссылка ${linkIndex + 1}`}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-x-4">
          <div
            className={`flex flex-col justify-between h-full bg-[#FFD600]/[.05] rounded p-10 w-full`}>
            <div className="flex flex-row justify-between mx-auto mb-4 text-gray-400 w-full">
              <div>
                <h3
                  className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">{'Хочешь подарить мне что-то особенное?'}</h3>

                <p
                  className="mt-2 als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">{'Можешь оставить это сюрпризом, или же поделиться идеями, чтобы я не купил себе то же самое!'}</p>
              </div>

              <div>
                <Telegram />
              </div>
            </div>

          </div>
        </div>
      </article>
    </section>
  );
};
