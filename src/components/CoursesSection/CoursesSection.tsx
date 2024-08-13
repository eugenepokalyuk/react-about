import {FC} from 'react';
import {Link} from 'react-router-dom';

type course = {
    name:string;
    link?:string;
};

interface CourseGroup {
    title:string;
    courses:course[];
}

type book = {
    name:string;
    link:string;
    description?:string;
};

interface BookGroup {
    title:string;
    books:book[];
}

interface CoursesSectionProps {
    coursesData:CourseGroup[];
    booksData:BookGroup[];
}

const CoursesSection:FC<CoursesSectionProps> = ({ coursesData, booksData }) => {
    return (
        <section
            className="flex flex-col p-2 xl:p-5 h-full xl:h-screen overflow-y-auto xl:w-[750px]"
        >
            <div className='max-h-full xl:max-h-screen mt-4'>
                <Link to="/projects">
                    <div
                        className='bg-[#FFD600] rounded-[16px] p-6 text-[20px] italic font-[400] leading-[22px] -tracking-[0.06em] text-center als-gorizont hover:bg-[#ffc100]'>
                        Мои проекты
                    </div>
                </Link>
            </div>

            <div className='max-h-full xl:max-h-screen mt-4'>
                <Link to="/about">
                    <div
                        className='bg-[#FFD600] rounded-[16px] p-6 text-[20px] italic font-[400] leading-[22px] -tracking-[0.06em] text-center als-gorizont hover:bg-[#ffc100]'>
                        Самопрезентация
                    </div>
                </Link>
            </div>

            <div className='max-h-full xl:max-h-screen mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div
                        className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Прошел
                        курсы
                    </div>

                    <ul className='mt-4'>
                        {coursesData.map((courseGroup, idx) => (
                            <li key={idx}
                                className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{courseGroup.title}</h3>

                                <ul>
                                    {courseGroup.courses.map((course, courseIdx:number) => (
                                        <a href={course.link ? course.link : "#"} key={courseIdx} target='_blank'>
                                            <li className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline">{course.name}</li>
                                        </a>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='max-h-full xl:max-h-screen mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div
                        className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Полезное
                    </div>

                    <ul className='mt-4'>
                        {booksData.map((bookGroup, idx) => (
                            <li key={idx}
                                className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{bookGroup.title}</h3>

                                <ul>
                                    {bookGroup.books.map((book, bookIdx) => (
                                        <>
                                            <li key={bookIdx}
                                                className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline">
                                                <a href={book.link} target='_blank'>{book.name}</a></li>
                                            {book.description && <li key={bookIdx}
                                                                     className="text-[#ffffff3d] text-[12px] italic font-[400] leading-[14px] eb-garamond">{book.description}</li>}
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
