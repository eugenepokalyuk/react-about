import { useInView } from 'react-intersection-observer';

import NavigateBar from "../components/NavigateBar/NavigateBar";
import ImageAstra from '../assets/images/Astra.jpg';
import ImageBoardgames from '../assets/images/boardgames.jpg';
import ImageSelfpresentation from '../assets/images/selfpresentation.jpg';
import ImageSmart from '../assets/images/smart.jpg';
import ImageSnowboarding from '../assets/images/snowboarding.jpg';

const AboutPage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="container mx-auto p-2 xl:p-5">
            <NavigateBar />

            <article ref={ref} className={`space-y-10 my-5 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-10'}`}>
                <div>
                    <h1 className="als-gorizont text-3xl xl:text-[90px] xl:leading-[100px] -tracking-[0.06em] font-black text-zinc-100">Привет!</h1>
                    
                    <p className="als-gorizont text-lg xl:text-xl font-medium xl:leading-6 text-zinc-400 xl:w-6/12">Профессиональный Frontend-разработчик с душой сноубордиста, любитель абиссинской кошки и настольных игр</p>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 justify-start items-start gap-x-4'>
                    <div className="flex items-center justify-center w-full mb-2 xl:order-1">
                        <img
                            src={ImageSelfpresentation}
                            alt=""
                            className="w-full bg-white h-[12rem] md:h-[24rem] object-cover object-top rounded"
                        />
                    </div>

                    <div className="flex flex-col justify-between h-full w-full xl:order-2">
                        <div className="mx-auto mb-4 text-gray-400 w-full">
                            <h3 className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">Меня зовут Женя</h3>
                    
                            <p className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto break-all">я Frontend-разработчик с почти трехлетним опытом работы в создании интерактивных пользовательских интерфейсов. Я специализируюсь на <span className='stack-underline'>React и TypeScript</span>, имею обширный опыт использования <span className='stack-underline'>Redux, Redux-Saga</span> для управления состоянием приложений и уверенно работаю с такими инструментами, как <span className='stack-underline'>Webpack, Vite, Tailwind CSS</span>. Мои ключевые достижения включают разработку высокопроизводительных приложений, оптимизацию их времени загрузки и улучшение пользовательского опыта.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 justify-start items-start gap-x-4'>
                    <div className="flex items-center justify-center w-full mb-2 xl:order-2">
                        <img
                            src={ImageSmart}
                            alt=""
                            className="w-full bg-white h-[12rem] md:h-[24rem] object-cover object-top rounded"
                        />
                    </div>

                    <div className="flex flex-col justify-between h-full w-full xl:order-1">
                        <div className="mx-auto mb-4 text-gray-400 w-full">
                            <h3 className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">Я стремлюсь</h3>
                            
                            <p className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">создавать удобные и отзывчивые интерфейсы, следуя современным стандартам и лучшим практикам в области разработки. Буду рад обсудить, как мой опыт и навыки могут быть полезны вашей компании.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 justify-start items-start gap-x-4'>
                    <div className="flex items-center justify-center w-full mb-2 xl:order-1">
                        <img
                            src={ImageSnowboarding}
                            alt=""
                            className="w-full bg-white h-[12rem] md:h-[24rem] object-cover object-center rounded"
                        />
                    </div>

                    <div className="flex flex-col justify-between h-full w-full xl:order-2">
                        <div className="mx-auto mb-4 text-gray-400 w-full">
                            <h3 className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">В свободное время</h3>
                            
                            <p className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">увлекаюсь сноубордингом, скейтбордингом наслаждаясь скоростью и адреналином. <span className='surfing-underline'>Надеюсь покорить серфинг!</span></p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 justify-start items-start gap-x-4'>
                    <div className="flex items-center justify-center w-full mb-2 xl:order-2">
                        <img
                            src={ImageAstra}
                            alt=""
                            className="w-full bg-white h-[12rem] md:h-[24rem] object-cover object-center rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-between h-full w-full xl:order-1">
                        <div className="mx-auto mb-4 text-gray-400 w-full">
                            <h3 className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">Также</h3>
                           
                            <p className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">у меня есть абиссинская кошка по имени <span className='cat-underline'>Астра</span>, которая всегда поднимает мне настроение своими проделками.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 justify-start items-start gap-x-4'>
                    <div className="flex items-center justify-center w-full mb-2 xl:order-1">
                        <img
                            src={ImageBoardgames}
                            alt=""
                            className="w-full bg-white h-[12rem] md:h-[24rem] object-cover object-center rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-between h-full w-full xl:order-2">
                        <div className="mx-auto mb-4 text-gray-400 w-full">
                            <h3 className="als-gorizont text-lg xl:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">Кроме того</h3>
                          
                            <p className="als-gorizont text-sm xl:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">люблю играть в настольные игры, которые помогают мне развивать стратегическое мышление и работать в <span className='team-underline'>команде</span>.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default AboutPage;
