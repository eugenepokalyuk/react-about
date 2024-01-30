import React from 'react';
import Avatar from '../../assets/avatar.png';
import { ReactComponent as IconGitHub } from '../../assets/icon-github.svg';
import { ReactComponent as IconTelegram } from '../../assets/icon-telegram.svg';

const ProfileSection: React.FC = () => {
    return (
        <section className="max-md:hidden flex flex-col items-center justify-between h-full md:h-screen space-y-4 p-5">
            <img src={Avatar} alt="Evgeny" className="rounded-full w-[80px] h-[120px] object-cover" />
            <div className='flex flex-col items-center space-y-4'>
                <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <IconTelegram />
                </div>
                <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <IconGitHub />
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;