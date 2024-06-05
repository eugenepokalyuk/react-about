import CoursesSection from "../components/CoursesSection/CoursesSection";
import GreetingSection from "../components/GreetingSection/GreetingSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import Scene from "../components/Scene/Scene";

const HomePage = () => {
    const coursesData = [{
        title: "Practicum by Yandex",
        courses: [
            {
                name: "React Developer",
                link: "https://disk.yandex.ru/i/o1DRmeVlnRJDNg"
            }
        ]
    }, {
        title: "Free Code Camp",
        courses: [
            {
                name: "Front End Development Libraries",
                link: "https://www.freecodecamp.org/certification/eugene.pokalyuk/front-end-development-libraries"
            },
            {
                name: "Responsive Web Design",
                link: "https://www.freecodecamp.org/certification/eugene.pokalyuk/responsive-web-design"
            },
            {
                name: "JavaScript Algorithms and Data Structures",
                link: "https://www.freecodecamp.org/certification/eugene.pokalyuk/javascript-algorithms-and-data-structures"
            }
        ]
    }, {
        title: "HTML Academy",
        courses: [
            {
                name: "Введение в React",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Старт в программировании",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Погружение в вёрстку",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Погружение в программирование на JavaScript",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Продвинутые техники и инструменты вёрстки",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Ретровёрстка",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            },
            {
                name: "Погружение в бэкенд",
                link: "https://htmlacademy.ru/profile/eugenepokalyuk"
            }
        ]
    }, {
        title: "Skillbox",
        courses: [
            {
                name: '"Веб-верстка «Базовый уровень», «Продвинутый уровень»", "JavaScript «Базовый уровень», «Продвинутый уровень»", "Node.js"',
                link: "#"
            }
        ]
    }];

    const booksData = [{
        title: "Александра Королькова",
        books: [{ name: "Живая типографика", description: "В книге живым и доступным языком изложены основные правила и закономерности типографики—«искусства расположения наборного материала на плоскости листа»", link: "https://awdee.ru/kniga-zhivaya-tipografika-teper-besplatna/" }],
    }, {
        title: "Kamran Ahmed",
        books: [{ name: "Frontend roadmap", description: "Frontend Developer. Step by step guide to becoming a modern frontend developer in 2024", link: "https://roadmap.sh/frontend" }],
    }, {
        title: "Вастрик",
        books: [{ name: "👩‍🎤 Инди vs Корпорат 👨‍💼", description: "Почему стек и подход к пет-проектам диаметрально противоположен тому, что вы делаете на работе", link: "https://vas3k.blog/notes/indie_vs_corpo/" }],
    }, {
        title: "CSS Games",
        books: [
            { name: "Flexbox Froggy.", description: "Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код", link: "https://flexboxfroggy.com/" },
            { name: "Grid Garden", description: "Место, где вы напишете CSS-код, чтобы вырастить морковный сад", link: "https://cssgridgarden.com/" }
        ],
    }];

    const sceneData = [{
        name: "HTML5",
        color: "#FFF",
        backgroundColor: '#FF7A00'
    }, {
        name: "CSS3",
        color: "#FFF",
        backgroundColor: '#0038FF'
    }, {
        name: "JavaScript",
        color: "#333",
        backgroundColor: '#FFD600'
    }, {
        name: "React",
        color: "#000",
        backgroundColor: '#61DAFB'
    }, {
        name: "Redux",
        color: "#FFFFFF",
        backgroundColor: '#764ABC'
    }, {
        name: "TypeScript",
        color: "#FFFFFF",
        backgroundColor: '#007ACC'
    }, {
        name: "WebSocket",
        color: "#FFFFFF",
        backgroundColor: '#800000'
    }, {
        name: "Figma",
        color: "#FFFFFF",
        backgroundColor: '#0ACF83'
    }, {
        name: "Tailwind",
        color: "#FFFFFF",
        backgroundColor: '#38B2AC'
    }, {
        name: "SQL",
        color: "#FFFFFF",
        backgroundColor: '#E38D13'
    }, {
        name: "Node",
        color: "#FFFFFF",
        backgroundColor: '#7CB701'
    }, {
        name: "Express",
        color: "#FFFFFF",
        backgroundColor: '#000000'
    }, {
        name: "Astro",
        color: "#FFFFFF",
        backgroundColor: "#b845ed"
    }, {
        name: "Alpine",
        color: "#2c3441",
        backgroundColor: "#72afd9"
    }, {
        name: "Next",
        color: "#FFFFFF",
        backgroundColor: "#000000"
    },
    // {
    //   name: "Redux-thunk",
    //   color: "#FFFFFF",
    //   backgroundColor: "#764ABC"
    // },
    {
        name: "Jest",
        color: "#FFFFFF",
        backgroundColor: "#99425B"
    },
    {
        name: "Cypress",
        color: "#FFFFFF",
        backgroundColor: "#17202C"
    },
    {
        name: "Vite",
        color: "#FFFFFF",
        backgroundColor: "#646fff"
    },
    {
        name: "Webpack",
        color: "#000000",
        backgroundColor: "#8DD6F9"
    },
    {
        name: "ES6",
        color: "#000000",
        backgroundColor: "#F7DF1E"
    },
    // {
    //   name: "Bootstrap",
    //   color: "#FFFFFF",
    //   backgroundColor: "#7952B3"
    // },
    // {
    //   name: "Material UI",
    //   color: "#FFFFFF",
    //   backgroundColor: "#0081CB"
    // },
    {
        name: "Git",
        color: "#FFFFFF",
        backgroundColor: "#F1502F"
    },
    // {
    //   name: "SCSS",
    //   color: "#FFFFFF",
    //   backgroundColor: "#CD6799"
    // },
    // {
    //   name: "Frontend",
    //   color: "#FFFFFF",
    //   backgroundColor: "#6CC24A"
    // },
    {
        name: "npm",
        color: "#FFFFFF",
        backgroundColor: "#CB3837"
    },
    // {
    //   name: "Matter.js",
    //   color: "#FFFFFF",
    //   backgroundColor: "#00A8C5"
    // },
    // {
    //   name: "SQLite",
    //   color: "#FFFFFF",
    //   backgroundColor: "#003B57"
    // },
    // {
    //   name: "Nginx",
    //   color: "#FFFFFF",
    //   backgroundColor: "#009639"
    // }, 
    // {
    //   name: "BEM",
    //   color: "#64D544",
    //   backgroundColor: '#000000'
    // },
    // {
    //   name: "PostCSS",
    //   color: "#FFFFFF",
    //   backgroundColor: '#DD3A0A'
    // },
    // {
    //   name: "Shadcn UI",
    //   color: "#2D2D2D",
    //   backgroundColor: '#FFD23F'
    // },
    // {
    //   name: "ESLint",
    //   color: "#FFFFFF",
    //   backgroundColor: '#4B32C3'
    // },
    // {
    //   name: "npm scripts",
    //   color: "#FFFFFF",
    //   backgroundColor: '#CB3837'
    // },
    // {
    //   name: "cors",
    //   color: "#FFFFFF",
    //   backgroundColor: '#F0653D'
    // },
    {
        name: "Electron",
        color: "#000000",
        backgroundColor: '#41B883'
    },
    {
        name: "Radix",
        color: "#FFFFFF",
        backgroundColor: '#591c48'
    }, {
        name: "Preact",
        color: "#FFFFFF",
        backgroundColor: '#673ab8'
    },
        // {
        //   name: "npx",
        //   color: "#000000",
        //   backgroundColor: '#C12127'
        // },
        // {
        //   name: "axios",
        //   color: "#FFFFFF",
        //   backgroundColor: '#3E863D'
        // },
        // {
        //   name: "dotenv",
        //   color: "#000000",
        //   backgroundColor: '#61C911'
        // }
    ];
    return (
        <div className="flex flex-col xl:flex-row justify-between items-start">
            <ProfileSection />
            <GreetingSection sceneData={sceneData} />
            {/* projectData={projectData} */}
            <CoursesSection coursesData={coursesData} booksData={booksData} />

            <div className='xl:hidden'>
                <Scene sceneData={sceneData} />
            </div>
        </div>
    );
}

export default HomePage;