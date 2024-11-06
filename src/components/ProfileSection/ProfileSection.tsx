import { FC } from 'react';

import Avatar from '../../assets/avatar.png';
import { Telegram } from '../modules/Links/Telegram';
import { GitHub } from '../modules/Links/GitHub';

const ProfileSection:FC = () => {
  return (
    <section className="max-xl:hidden flex flex-col items-center justify-between h-full xl:h-screen space-y-4 p-5">
      <div>
        <img src={Avatar} alt="Evgeny" className="rounded-full w-[80px] h-[120px] object-cover" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Telegram />

        <GitHub />
      </div>
    </section>
  );
};

export default ProfileSection;
