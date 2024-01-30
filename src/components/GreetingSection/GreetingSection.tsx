import Avatar from '../../assets/avatar.png';
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
            <div className='hidden md:block'>
                <Scene sceneData={sceneData} />
            </div>
        </section>
    );
};

export default GreetingSection;