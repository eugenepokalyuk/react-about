import { FC, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

interface ProjectItemProps {
    url: string,
    urlGitHub: string,
    img?: string,
    badges: string[],
    title: string,
    description: string
}

const ProjectItem: FC<ProjectItemProps> = ({ url, urlGitHub, img, badges, title, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'} flex flex-col items-start justify-start text-center bg-[#ffffff08] p-3 md:p-4 rounded-[16px]`}>
            <div className="flex items-center justify-center w-full">
                {img
                    ? (
                        <img
                            src={img}
                            alt=""
                            className="w-full bg-white h-[20rem] md:h-[30rem] xl:h-[40rem] rounded-t-2xl"
                        />
                    ) : url && (
                        <iframe
                            frameBorder="0"
                            src={url}
                            className="w-full bg-white h-[20rem] md:h-[30rem] xl:h-[40rem] rounded-t-2xl"
                        />
                    )
                }

            </div>
            <div className="flex flex-col justify-between h-full w-full">
                <div className="mx-auto mb-4 text-gray-400 mt-4 w-full">
                    <h3 className="als-gorizont text-lg md:text-3xl -tracking-[0.06em] font-black text-zinc-100 text-left">{title}</h3>
                    <p className="als-gorizont text-sm md:text-xl font-medium leading-6 text-zinc-400 text-left overflow-auto">{description}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between w-full">
                    <div className="flex flex-row flex-wrap justify-start items-center mr-auto gap-2 mb-4 w-full xl:w-4/12">
                        {badges.map((badge) => {
                            return (
                                <span className="als-gorizont bg-black text-[#FFD600] text-xs font-medium px-2 py-1 uppercase rounded">{badge}</span>
                            )
                        })}
                    </div>

                    <div className="flex flex-row justify-end items-end gap-x-2">
                        <div className="text-nowrap">
                            <Link to={url} target="_blank" className="h-full">
                                <p className="als-gorizont w-full bg-[#FFD600] text-black text-xs font-medium px-2 py-1 uppercase rounded hover:brightness-90">Поглядеть</p>
                            </Link>
                        </div>

                        <div className="text-nowrap">
                            <Link to={urlGitHub} target="_blank" className="h-full">
                                <p className="als-gorizont w-full bg-[#FFD600] text-black text-xs font-medium px-2 py-1 uppercase rounded hover:brightness-90">Код</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ProjectsPage = () => {
    const projectArray: ProjectItemProps[] = [
        {
            url: "https://react-crafttech.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-crafttech",
            badges: ["React", "TypeScript", "sass", "konva"],
            title: "Web Paint",
            description: "Это приложение, предоставляет собой бесконечный холст, на котором пользователь может добавлять фигуры и манипулировать ими. Также есть возможность отмены действий в обе стороны и изменение заднего фона."
        },
        {
            url: "https://react-madsoft.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-madsoft",
            badges: ["React", "TypeScript", "Redux", "Tailwind", "Formik"],
            title: "Информационная система для проверки знаний учащихся школы.",
            description: "В школе проводятся промежуточные аттестации учащихся в формате теста."
        }, {
            url: "https://react-airnet.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-airnet",
            badges: ["React", "TypeScript"],
            title: "AirNet To-Do list",
            description: "To-Do sheet in the form of a calendar, where each day is presented as a list of tasks. Clicking on a day opens a modal window with a list of tasks. In this window you can create new tasks, delete them and mark them as completed."
        }, {
            url: "https://react-pryaniky.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-pryaniky",
            badges: ["React", "TypeScript", "React Router v6", "Redux", "Redux Saga", "Material UI", "Formik"],
            title: "Pryaniky SPA",
            description: "The application is a secure one-page web application that provides CRUD operations (create, read, update, delete) on data stored on the server"
        }, {
            url: "https://react-personik.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-personik",
            badges: ["React", "TypeScript", "Tailwind", "React Router v6"],
            title: "The game of cities",
            description: "This web application is a game of cities for time. The goal of the game is to name as many real cities as possible. The application includes a game with “AI” validation of cities, animation of progress bar and display of game results."
        }, {
            url: "https://react-mtg.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-mtg",
            badges: ["React", "TypeScript", "Redux", "Vite"],
            title: "SPA Application with Header and Reviews for MTG",
            description: "This project is a Single Page Application (SPA) built using React (class components), Redux, TypeScript, and Vite. The application consists of a header with an image, a language dropdown, a live clock, and a main section displaying a list of reviews with pagination."
        }, {
            url: "https://react-iway.vercel.app",
            urlGitHub: "https://github.com/eugenepokalyuk/react-iway",
            badges: ["React", "TypeScript", "Redux", "Vite", "Ant Design", "SCSS", "React Router v6"],
            title: "Trips Management System",
            description: "The Trips Management System is a React-based web application designed to manage and display trip details. It includes features such as trip listing, detailed trip views, search and filtering capabilities, and pagination."
        }, {
            url: "https://next-aceplace.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/next-aceplace",
            badges: ["Next", "React", "TypeScript", "CSS/SCSS", "DaData API", "SSR"],
            title: "Organization Info Finder",
            description: "This project is a Next.js application that allows users to search for organizations by their tax identification number (INN) and display detailed information about the organization. The data is fetched from the DaData API."
        }, {
            url: "https://eugenepokalyuk.github.io/static-helper-designcareer/",
            urlGitHub: "https://github.com/eugenepokalyuk/static-helper-designcareer",
            badges: ["HTML", "CSS", "JavaScript"],
            title: "Helper: как максимально быстро прокачать карьеру дизайнера",
            description: "Как максимально быстро прокачать карьеру дизайнера. Интенсив создан на основе исследования карьер ведущих дизайнеров. Топ 5 фишек для буста дизайн карьеры."
        }, {
            url: "https://eugenepokalyuk.github.io/static-helper-garantiya/",
            urlGitHub: "https://github.com/eugenepokalyuk/static-helper-garantiya",
            badges: ["HTML", "CSS", "JavaScript"],
            title: "Helper: теперь с гарантией трудоустройства",
            description: "Рассказываем как мы сделали по-настоящему прозрачную гарантию трудоустройства для дизайнеров."
        }, {
            url: "https://eugenepokalyuk.github.io/static-helper-main-page/",
            urlGitHub: "https://github.com/eugenepokalyuk/static-helper-main-page",
            badges: ["HTML", "CSS", "JavaScript"],
            title: "Helper - Платформа прокачки карьеры дизайнеров",
            description: "Прокачиваем карьеру продуктовых, веб, UX/UI и графических дизайнеров. За 3-4 месяца ты усилишь скиллы и упакуешь портфолио, так, чтобы за тебя «дрались» HR-ы."
        }, {
            url: "https://skateboarding.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/vue-skateboarding",
            badges: ["Vue 3", "Vite", "Tailwind", "PostCSS", "Vue Router"],
            title: "Skateboarding",
            description: "SkateHut was established in 2007 by Mark Johansen-Berg following a family holiday to Florida with his wife and three sons. When his eldest son spotted a pair of Heelys in one of the theme parks, he just had to have a pair! Upon arriving back to the UK, they realised that Heelys were nowhere to be seen. Mark and his family decided to do something about it."
        }, {
            url: "https://next-generate-qr.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/next-generate-qr",
            badges: ["Next", "React", "TypeScript", "ShadCN-ui"],
            title: "Beauty QR Code Generation",
            description: "Project appears to be a Next.js web application designed for generating QR codes with customizable backgrounds. The application integrates with external APIs for both QR code generation and dynamic background image creation based on user-provided prompts."
        }, {
            url: "https://astro-blog-chi-seven.vercel.app",
            urlGitHub: "https://github.com/eugenepokalyuk/astro-blog",
            badges: ["Astro", "TypeScript", "PReact", "Alpine.js", "Tailwind"],
            title: "Blog",
            description: "A blog built using Astro, a modern website building framework that allows for server-side visual components and integrates with Tailwind CSS for styling."
        }, {
            url: "https://ujjo-hot-sauce.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/next-ujjo-hot-sauce",
            badges: ["Next", "React", "TypeScript", "Tailwind"],
            title: "Ujjo Hot Sauce",
            description: "The project includes a website on Next.js with Tailwind CSS to sell a unique product - spicy coffee sauce. Includes adaptive components: header, ticker, product cards with non-standard borders."
        }, {
            url: "https://eugenepokalyuk.github.io/react-helper-personal-account/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-helper-personal-account",
            badges: ["React", "Redux", "TypeScript", "Tailwind", "Vite"],
            title: "Helper. Designer's profile",
            description: "Minimal React setup using TypeScript and Vite, featuring Hot Module Replacement (HMR) and ESLint rules. It supports official plugins for fast refresh with Babel or SWC and guides on expanding ESLint configurations for production. It's tailored for developers seeking a streamlined React framework with Redux, TypeScript, and Tailwind CSS integration."
        }, {
            url: "https://become-designer.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/helper-become-designer",
            badges: ["React", "Redux", "TypeScript", "Tailwind", "Vite"],
            title: "Helper. Become designer",
            description: "Minimal setup for React applications with Hot Module Replacement (HMR) and ESLint rules. It supports official plugins like @vitejs/plugin-react and @vitejs/plugin-react-swc for fast refresh, and provides guidance for expanding ESLint configuration for production-ready apps"
        }, {
            url: "https://eugenepokalyuk.github.io/react-pet-store/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-pet-store",
            badges: ["React", "Redux", "TypeScript", "Tailwind", "Radix-ui", "Vite", "Framer Motion"],
            title: "Online pet store",
            description: "Online store for pets. List of goods, shopping cart, payment form for goods, animations, map widget"
        }, {
            url: "https://eugenepokalyuk.github.io/react-music-collection/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-music-collection",
            badges: ["React", "TypeScript", "Tailwind", "Vite"],
            title: "Music collection",
            description: "List of the Yandex Music user's music collection"
        }, {
            url: "https://github.com/eugenepokalyuk/react_python-gameclub",
            urlGitHub: "https://github.com/eugenepokalyuk/react_python-gameclub",
            img: "https://private-user-images.githubusercontent.com/111701135/307546444-5cdb353f-52ea-455d-887f-bfa021538830.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTcyNTE5NjYsIm5iZiI6MTcxNzI1MTY2NiwicGF0aCI6Ii8xMTE3MDExMzUvMzA3NTQ2NDQ0LTVjZGIzNTNmLTUyZWEtNDU1ZC04ODdmLWJmYTAyMTUzODgzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwMVQxNDIxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZmZkZWQxY2JmNTFmNzIyYTY2YjAyMTYzYmI0MzZhNmFmN2Q1M2EwMTM3NmMzYTU3NDJmMjA3ZTQwOTUwNmE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.j2m0ktCNS0vDTi6K38K4r-P5bMUfNZfKBJSmm4D9w80",
            badges: ["React", "TypeScript", "Tailwind", "Redux", "Chart.js", "Python", "FastAPI", "Pydantic", "Uvicorn", "SQLAlchemy", "Router Router v6", "DND"],
            title: "Панель управления компьютерным клубом",
            description: "Предоставляет возможность управлять рабочими местами и проводить финансовый учет. Панель позволит сотрудникам клуба с одного рабочего компьютера устанавливать доступное время игры/работы за каждым компьютером или PlayStation 5 внутри клуба. Она также предоставит информацию о выручке за смену, сумме наличных в кассе, а также содержать базу данных сотрудников и посетителей клуба. Дополнительно, панель будет иметь базу данных с текущими товарами (напитки, еда), которые предлагаются на продажу."
        }, {
            url: "https://eugenepokalyuk.github.io/react-freetogame/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-freetogame",
            badges: ["React", "Redux", "TypeScript", "CSS Modules", "css-in-js", "Vite", "NodeJS", "Jest"],
            title: "Free to game",
            description: "FreeToGame provides access to the best free-to-play multiplayer games and MMO Games while rewarding gamers with free premium in-game loot and exclusive perks."
        }, {
            url: "https://inwood-pi.vercel.app/",
            urlGitHub: "https://github.com/eugenepokalyuk/next-inwood",
            badges: ["React", "TypeScript", "Next", "Tailwind"],
            title: "Inwood",
            description: "A stylish website featuring a responsive design with a modern UI/UX, offering an exclusive furniture collection. It integrates a product carousel, detailed item views, a special package section, and a comprehensive footer with social links and navigation. The site uses Next.js, TypeScript, and TailwindCSS."
        }, {
            url: "https://eugenepokalyuk.github.io/react-real-estate/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-real-estate",
            badges: ["React", "TypeScript", "css-modules"],
            title: "Real Estate",
            description: "The landing page of a company specializing in the exterior of real estate is a modern and intuitive web interface created on React. The main page focuses on the company's portfolio of projects, showing high-quality images and descriptions of implemented exterior solutions for various types of real estate"
        }, {
            url: "https://eugenepokalyuk.github.io/react-about/",
            urlGitHub: "https://github.com/eugenepokalyuk/react-about",
            badges: ["React", "TypeScript", "Tailwind"],
            title: "About",
            description: "Page about me."
        }];

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const allTags = Array.from(new Set(projectArray.flatMap(project => project.badges)));

    const filteredProjects = selectedTag
        ? projectArray.filter(project => project.badges.includes(selectedTag))
        : projectArray;

    return (
        <section className="container mx-auto p-2 md:p-5">
            <nav>
                <Link to="/">
                    <button
                        className='flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                            className="scale-[75%]"
                        >
                            <path
                                d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
                            />
                        </svg>
                        Вернуться на главную страницу
                    </button>
                </Link>
            </nav>

            <article className="space-y-10 my-5">
                <div>
                    <h1 className="als-gorizont text-3xl md:text-[90px] md:leading-[100px] -tracking-[0.06em] font-black text-zinc-100">Мои проекты</h1>
                    <p className="als-gorizont text-lg md:text-xl font-medium md:leading-6 text-zinc-400">Некоторые из проектов связаны с работой, <br /> а некоторые - с моим личным временем.</p>
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

                <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 grid-cols-1 gap-4 mt-4">
                    {filteredProjects.length > 0 ? (
                        <>
                            {filteredProjects.map((item: ProjectItemProps, index: number) => (
                                <ProjectItem key={index} {...item} />
                            ))}
                        </>
                    ) : (
                        <p className="als-gorizont mt-4 text-zinc-400">К сожалению, я еще не сделал никакой проект</p>
                    )}
                </div>

            </article>
        </section>
    )
}
export default ProjectsPage;