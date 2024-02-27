import CoursesSection from "../components/CoursesSection/CoursesSection";
import GreetingSection from "../components/GreetingSection/GreetingSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import Scene from "../components/Scene/Scene";

const HomePage = () => {
    const coursesData = [{
        title: "Practicum by Yandex",
        courses: ["React Developer"]
    }, {
        title: "Free Code Camp",
        courses: ["Front End Development Libraries", "Responsive Web Design", "JavaScript Algorithms and Data Structures"]
    }, {
        title: "HTML Academy",
        courses: ["Введение в React", "Старт в программировании", "Погружение в вёрстку", "Погружение в программирование на JavaScript", "Продвинутые техники и инструменты вёрстки", "Ретровёрстка", "Погружение в бэкенд"]
    }, {
        title: "Skillbox",
        courses: ["Веб-верстка «Базовый уровень», «Продвинутый уровень»", "JavaScript «Базовый уровень», «Продвинутый уровень»", "Node.js"]
    }];
    const booksData = [{
        title: "Александра Королькова",
        books: [{ name: "Живая типографика", link: "https://awdee.ru/kniga-zhivaya-tipografika-teper-besplatna/" }],
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
    // const projectData = [{
    //     title: "Слушать хорошую музыку",
    //     description: "",
    //     playlist: [{ name: "Мой плейлист", link: "https://eugenepokalyuk.github.io/react-music-collection/" }],
    // }, {
    //     title: "Почитать хороший блог",
    //     description: "",
    //     playlist: [{ name: "Блог Nordic rose", link: "https://astro-blog-chi-seven.vercel.app/" }],
    // }, {
    //     title: "Визитка очень острого соуса",
    //     description: "",
    //     playlist: [{ name: "Лендинг Ujjo Hot Sauce", link: "https://ujjo-hot-sauce.vercel.app/" }],
    // }, {
    //     title: "Модный интерьер",
    //     description: "",
    //     playlist: [{ name: "Лендинг Inwood", link: "https://inwood-pi.vercel.app/" }],
    // }, {
    //     title: "Судия дизайна Helper",
    //     description: "",
    //     playlist: [
    //         { name: "Портфолио дизайнера", link: "https://eugenepokalyuk.github.io/react-helper-personal-account/" },
    //         { name: "Как стать дизайнером продукта", link: "https://become-designer.vercel.app/" }
    //     ],
    // }, {
    //     title: "Брендовые вещи домашних питомцев",
    //     description: "",
    //     playlist: [{ name: "Инетрнет-магазин Pet store", link: "https://eugenepokalyuk.github.io/react-pet-store/" }],
    // }];
    return (
        <div className="flex flex-col md:flex-row justify-between items-start">
            <ProfileSection />
            <GreetingSection sceneData={sceneData} />
            {/* projectData={projectData} */}
            <CoursesSection coursesData={coursesData} booksData={booksData} />

            <div className='md:hidden'>
                <Scene sceneData={sceneData} />
            </div>
        </div>
    );
}

export default HomePage;