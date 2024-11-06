import CoursesSection from '../../components/CoursesSection/CoursesSection.tsx';
import GreetingSection from '../../components/GreetingSection/GreetingSection.tsx';
import ProfileSection from '../../components/ProfileSection/ProfileSection.tsx';
import Scene from '../../components/Scene/Scene.tsx';
import { booksData, coursesData, sceneData } from '../../utils/mocks.ts';

export const Home = () => (
  <div className="flex flex-col xl:flex-row justify-between items-start">
    <ProfileSection />

    <GreetingSection sceneData={sceneData} />

    <CoursesSection coursesData={coursesData} booksData={booksData} />

    <div className="xl:hidden">
      <Scene sceneData={sceneData} />
    </div>
  </div>
);
