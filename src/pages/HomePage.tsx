import CoursesSection from "../components/CoursesSection/CoursesSection";
import GreetingSection from "../components/GreetingSection/GreetingSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import Scene from "../components/Scene/Scene";
import {booksData, coursesData, sceneData} from "../utils/mocks.ts";

export const HomePage = () => (
        <div className="flex flex-col xl:flex-row justify-between items-start">
            <ProfileSection/>

            <GreetingSection sceneData={sceneData}/>

            <CoursesSection coursesData={coursesData} booksData={booksData}/>

            <div className='xl:hidden'>
                <Scene sceneData={sceneData}/>
            </div>
        </div>
    );
