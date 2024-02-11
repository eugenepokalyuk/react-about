import Avatar from '../../assets/avatar.png';
import { ReactComponent as IconGitHub } from '../../assets/icon-mobile-github.svg';
import { ReactComponent as IconTelegram } from '../../assets/icon-mobile-telegram.svg';
import Scene from "../Scene/Scene";
interface SceneGroup {
    name: string,
    color: string,
    backgroundColor: string
}

interface GreetingSectionProps {
    sceneData: SceneGroup[];
}

const GreetingSection: React.FC<GreetingSectionProps> = ({ sceneData }) => {
    return (
        <section className="flex flex-col justify-between h-full md:h-screen w-full p-5 pb-0">
            <div className='flex space-x-[36px]'>
                <img src={Avatar} alt="Evgeny" className="md:hidden rounded-full w-[70px] h-[110px] object-cover" />
                <h1 className='text-[28px] md:text-[48px] text-[#FFFFFF] font-[400] leading-[34px] md:leading-[56px] ibm-plex max-w-xs md:max-w-[620px]'>Привет! Меня зовут Евгений. Я занимаюсь фронтенд разработкой</h1>
            </div>

            <div className='md:hidden flex flex-col items-center mt-4'>
                <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <a href="https://github.com/eugenepokalyuk" target="_blank" className='relative'>
                        <p className='text-white ibm-plex absolute top-[50%] -translate-y-[50%] left-[60%] -translate-x-[60%]'>GitHub</p>
                        <IconGitHub />
                    </a>
                </div>

                <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <a href="https://t.me/PaperCranejs" target="_blank" className='relative'>
                        <p className='text-white ibm-plex absolute top-[50%] -translate-y-[50%] left-[65%] -translate-x-[60%]'>Telegram</p>
                        <IconTelegram />
                    </a>
                </div>
            </div>

            <div className='hidden md:block'>
                <Scene sceneData={sceneData} />
            </div>
        </section>
    );
};

export default GreetingSection;