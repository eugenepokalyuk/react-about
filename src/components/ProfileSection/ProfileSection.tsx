import React from 'react';
import Avatar from '../../assets/avatar.png';
import { ReactComponent as IconGitHub } from '../../assets/icon-github.svg';
import { ReactComponent as IconTelegram } from '../../assets/icon-telegram.svg';

const ProfileSection: React.FC = () => {
    return (
        <section className="max-xl:hidden flex flex-col items-center justify-between h-full xl:h-screen space-y-4 p-5">
            <div>
                <img src={Avatar} alt="Evgeny" className="rounded-full w-[80px] h-[120px] object-cover" />
            </div>

            <div className='flex flex-col items-center space-y-4'>
                <div className="rounded-full w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <a href="https://t.me/PaperCranejs" target="_blank">
                        <IconTelegram />
                    </a>
                </div>

                <div className="rounded-full w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center hover:cursor-pointer hover:brightness-[.75] hover:opacity-[95%] transition duration-300 ease-in-out">
                    <a href="https://github.com/eugenepokalyuk" target="_blank">
                        <IconGitHub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;