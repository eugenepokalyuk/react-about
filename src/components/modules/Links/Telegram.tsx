import { ReactComponent as IconTelegram } from '../../../assets/icon-telegram.svg';

export const Telegram = () => (
  <div
    className="rounded-full w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
    <a href="https://t.me/wazzupjohnny" target="_blank">
      <IconTelegram />
    </a>
  </div>
);
