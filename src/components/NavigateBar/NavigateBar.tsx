import { Link, useLocation } from "react-router-dom";
import { ABOUT_PATH, PROJECTS_PATH } from "../../utils/routePath";

const NavigateBar = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-row gap-x-4">
            <Link to="/">
                <button
                    className='flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        className="scale-[75%]"
                    >
                        <path
                            d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
                        />
                    </svg>
                    Вернуться на главную страницу
                </button>
            </Link>

            {location.pathname !== PROJECTS_PATH && (
                <Link to={PROJECTS_PATH} className="hidden xl:block">
                    <button
                        className='flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2'>
                        Мои проекты
                    </button>
                </Link>
            )}

            {location.pathname !== ABOUT_PATH && (
                <Link to={ABOUT_PATH} className="hidden xl:block">
                    <button
                        className='flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2'>
                        Самопрезентация
                    </button>
                </Link>
            )}
        </nav>
    )
}
export default NavigateBar;