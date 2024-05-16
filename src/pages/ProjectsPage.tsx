import { FC } from "react";
import { Link } from "react-router-dom";

interface ProjectItemProps {
    url: string,
    badges: string[],
    title: string,
    description: string
}

const ProjectItem: FC<ProjectItemProps> = ({ url, badges, title, description }) => {
    return (
        <div className="flex flex-col items-start justify-start text-center bg-[#ffffff08] p-3 md:p-4 rounded-[16px]">
            <div className="flex items-center justify-center w-full">
                <iframe src={url} frameBorder="0" className="w-full bg-white h-[20rem] md:h-[30rem] xl:h-[40rem] rounded-t-2xl" />
            </div>
            <div className="flex flex-col justify-between h-full w-full">
                <div className="mx-auto mb-4 text-gray-400 mt-4 w-full">
                    <h3 className="text-2xl text-left font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-justify my-4 h-[6em] overflow-auto">{description}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between w-full">
                    <div className="flex flex-row flex-wrap justify-start items-center mr-auto gap-2 mb-4">
                        {badges.map((badge) => {
                            return (
                                <span className="bg-black text-[#FFD600] text-xs font-medium px-2 py-1 uppercase rounded">{badge}</span>
                            )
                        })}
                    </div>

                    <div className="text-nowrap">
                        <Link to={url}>
                            {/* Перейти на сайт */}
                            <p className="w-full bg-blue-900 text-blue-300 text-xs font-medium px-2 py-1 uppercase rounded hover:brightness-90">View page</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ProjectsPage = () => {
    const projectArray: ProjectItemProps[] = [{
        url: "https://eugenepokalyuk.github.io/static-helper-garantiya/",
        badges: ["html", "css", "javascript"],
        title: "Helper Garantiya",
        description: ""
    },{
        url: "https://eugenepokalyuk.github.io/static-helper-main-page/",
        badges: ["html", "css", "javascript"],
        title: "Helper Main Page",
        description: ""
    }, {
        url: "https://react-iway.vercel.app/",
        badges: ["react", "router v6", "vite", "redux", "typescript", "scss", "antd"],
        title: "I Way",
        description: "The Trips Management System is a React-based web application designed to manage and display trip details. It includes features such as trip listing, detailed trip views, search and filtering capabilities, and pagination. The application leverages Ant Design for UI components and integrates with a Redux store for state management."
    }, {
        url: "https://next-aceplace.vercel.app/",
        badges: ["react", "typescript", "next", "ssr", "dadata"],
        title: "Ace Place",
        description: "This project is a Next application that allows users to search for organizations by their tax identification number (INN) and display detailed information about the organization. The data is fetched from the DaData API."
    }, {
        url: "https://skateboarding.vercel.app/",
        badges: ["vue3", "vite", "vue-router", "tailwind", "postcss"],
        title: "Skateboarding",
        description: "SkateHut was established in 2007 by Mark Johansen-Berg following a family holiday to Florida with his wife and three sons. When his eldest son spotted a pair of Heelys in one of the theme parks, he just had to have a pair! Upon arriving back to the UK, they realised that Heelys were nowhere to be seen. Mark and his family decided to do something about it."
    }, {
        url: "https://next-generate-qr.vercel.app/",
        badges: ["next", "react", "typescript", "shadcn-ui"],
        title: "Beauty QR Code Generation",
        description: "Project appears to be a Next.js web application designed for generating QR codes with customizable backgrounds. The application integrates with external APIs for both QR code generation and dynamic background image creation based on user-provided prompts."
    }, {
        url: "https://astro-blog-chi-seven.vercel.app",
        badges: ["astro", "typescript", "preact", "alpinejs", "tailwind"],
        title: "Blog",
        description: "A blog built using Astro, a modern website building framework that allows for server-side visual components and integrates with Tailwind CSS for styling."
    }, {
        url: "https://ujjo-hot-sauce.vercel.app/",
        badges: ["next", "react", "typescript", "tailwind"],
        title: "Ujjo Hot Sauce",
        description: "The project includes a website on Next.js with Tailwind CSS to sell a unique product - spicy coffee sauce. Includes adaptive components: header, ticker, product cards with non-standard borders."
    }, {
        url: "https://eugenepokalyuk.github.io/react-helper-personal-account/",
        badges: ["react", "redux", "typescript", "tailwind", "vite"],
        title: "Helper. Designer's profile",
        description: "Minimal React setup using TypeScript and Vite, featuring Hot Module Replacement (HMR) and ESLint rules. It supports official plugins for fast refresh with Babel or SWC and guides on expanding ESLint configurations for production. It's tailored for developers seeking a streamlined React framework with Redux, TypeScript, and Tailwind CSS integration."
    }, {
        url: "https://become-designer.vercel.app/",
        badges: ["react", "redux", "typescript", "tailwind", "vite"],
        title: "Helper. Become designer",
        description: "Minimal setup for React applications with Hot Module Replacement (HMR) and ESLint rules. It supports official plugins like @vitejs/plugin-react and @vitejs/plugin-react-swc for fast refresh, and provides guidance for expanding ESLint configuration for production-ready apps"
    }, {
        url: "https://eugenepokalyuk.github.io/react-pet-store/",
        badges: ["react", "redux", "typescript", "tailwind", "radix-ui", "vite", "framer-motion"],
        title: "Online pet store",
        description: "Online store for pets. List of goods, shopping cart, payment form for goods, animations, map widget"
    }, {
        url: "https://eugenepokalyuk.github.io/react-music-collection/",
        badges: ["react", "typescript", "tailwind", "vite"],
        title: "Music collection",
        description: "List of the Yandex Music user's music collection"
    }, {
        url: "https://eugenepokalyuk.github.io/react-freetogame/",
        badges: ["react", "redux", "typescript", "CSS Modules", "css-in-js", "vite", "Nodejs", "jest"],
        title: "Free to game",
        description: "FreeToGame provides access to the best free-to-play multiplayer games and MMO Games while rewarding gamers with free premium in-game loot and exclusive perks."
    }, {
        url: "https://inwood-pi.vercel.app/",
        badges: ["react", "typescript", "next", "tailwind"],
        title: "Inwood",
        description: "A stylish website featuring a responsive design with a modern UI/UX, offering an exclusive furniture collection. It integrates a product carousel, detailed item views, a special package section, and a comprehensive footer with social links and navigation. The site uses Next.js, TypeScript, and TailwindCSS."
    }, {
        url: "https://eugenepokalyuk.github.io/react-real-estate/",
        badges: ["react", "typescript", "css-modules"],
        title: "Real Estate",
        description: "The landing page of a company specializing in the exterior of real estate is a modern and intuitive web interface created on React. The main page focuses on the company's portfolio of projects, showing high-quality images and descriptions of implemented exterior solutions for various types of real estate"
    }, {
        url: "https://eugenepokalyuk.github.io/react-about/",
        badges: ["react", "typescript", "tailwind"],
        title: "About",
        description: "Page about me."
    }];
    return (
        <section className="container mx-auto p-2 md:p-5">
            <nav>
                <ul>
                    <li>
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
                    </li>
                </ul>
            </nav>

            <article className="my-5">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Мои проекты</h1>
                <p className="mt-4 text-zinc-400">Некоторые из проектов связаны с работой, а некоторые - с моим личным временем.</p>
                <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 grid-cols-1 gap-4 mt-4">
                    {projectArray.length > 0 ? (
                        <>
                            {projectArray.map((item: ProjectItemProps) => {
                                return (
                                    <ProjectItem {...item} />
                                )
                            })}
                        </>
                    ) : (
                        <p className="mt-4 text-zinc-400">К сожалению, я еще не сделал никакой проект</p>
                    )}
                </div>
            </article>
        </section>
    )
}
export default ProjectsPage;