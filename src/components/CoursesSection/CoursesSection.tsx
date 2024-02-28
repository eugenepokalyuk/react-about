import React from 'react';
import { Link } from 'react-router-dom';

interface CourseGroup {
    title: string;
    courses: string[];
}

type book = {
    name: string;
    link: string;
    description?: string;
};

interface BookGroup {
    title: string;
    books: book[];
}

// type playlist = {
//     name: string;
//     link: string;
// };

// interface ProjectGroup {
//     title: string;
//     playlist: playlist[];
// }

interface CoursesSectionProps {
    coursesData: CourseGroup[];
    booksData: BookGroup[];
    // projectData: ProjectGroup[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
    coursesData,
    booksData,
    // projectData 
}) => {
    return (
        <section
            className="flex flex-col p-5 h-full md:h-screen overflow-y-auto md:w-[50%]"
        >
            {/* <div className='max-h-full md:max-h-screen'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <Link to="/projects">
                        <button className='text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline rounded-md px-2 py-1 w-full mt-2'>Посмотреть проекты</button>
                    </Link>
                </div>
            </div> */}
            <div className='max-h-full md:max-h-screen mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="pb-4 mb-4 text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] eb-garamond">
                        Мои проекты
                    </div>

                    <div>
                        <Link to="/projects">
                            <button className='flex items-center bg-[#ffffff08] justify-center hover:cursor-pointer text-[#FFD600] hover:underline rounded-md px-2 py-1 w-full mt-2'>
                                <span className='text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond'>Перейти на страницу с проектами</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 -960 960 960"
                                    width="24"
                                    className="rotate-180 scale-[75%] fill-[#FFD600]"
                                >
                                    <path
                                        d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='max-h-full md:max-h-screen mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Прошел курсы</div>
                    <ul className='mt-4'>
                        {coursesData.map((courseGroup, idx) => (
                            <li key={idx} className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{courseGroup.title}</h3>
                                <ul>
                                    {courseGroup.courses.map((course, courseIdx) => (
                                        <li key={courseIdx} className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline">{course}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='max-h-full md:max-h-screen mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Полезное</div>
                    <ul className='mt-4'>
                        {booksData.map((bookGroup, idx) => (
                            <li key={idx} className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{bookGroup.title}</h3>
                                <ul>
                                    {bookGroup.books.map((book, bookIdx) => (
                                        <>
                                            <li key={bookIdx} className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline"><a href={book.link} target='_blank'>{book.name}</a></li>
                                            {book.description && <li key={bookIdx} className="text-[#ffffff3d] text-[12px] italic font-[400] leading-[14px] eb-garamond">{book.description}</li>}
                                        </>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default CoursesSection;