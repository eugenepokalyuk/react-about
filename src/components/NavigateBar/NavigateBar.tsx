import { Link, useLocation } from 'react-router-dom';

import { Urls } from '../../utils/routePath';

const NavigateBar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-row gap-x-4">
      <Link to="/" className="w-full md:w-auto">
        <button
          className="flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2 w-full md:w-auto">
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

      {location.pathname !== Urls.Projects && (
        <Link to={Urls.Projects} className="hidden md:block">
          <button
            className="flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[18px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2">
            {'Мои проекты'}
          </button>
        </Link>
      )}

      {location.pathname !== Urls.About && (
        <Link to={Urls.About} className="hidden md:block">
          <button
            className="flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[18px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2">
            {'Самопрезентация'}
          </button>
        </Link>
      )}

      {location.pathname !== Urls.WishList && (
        <Link to={Urls.WishList} className="hidden md:block">
          <button
            className="flex fill-[#FFD600] bg-[#ffffff08] text-[#FFD600] text-[18px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 mt-2">
            {'Wish list'}
          </button>
        </Link>
      )}
    </nav>
  );
};
export default NavigateBar;
