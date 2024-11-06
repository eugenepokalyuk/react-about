import { ReactComponent as IconGitHub } from '../../../assets/icon-github.svg';

export const GitHub = () => (
  <div
    className="rounded-full w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
    <a href="https://github.com/eugenepokalyuk" target="_blank">
      <IconGitHub />
    </a>
  </div>
);
