import React from 'react';

interface CourseGroup {
    title: string;
    courses: string[];
}

type book = {
    name: string;
    link: string;
};

interface BookGroup {
    title: string;
    books: book[];
}

type playlist = {
    name: string;
    link: string;
};

interface MusicGroup {
    title: string;
    playlist: playlist[];
    // playlist: [{ name: "Живая типографика", link: "https://eugenepokalyuk.github.io/react-music-collection/" }],
}

interface CoursesSectionProps {
    coursesData: CourseGroup[];
    booksData: BookGroup[];
    musicData: MusicGroup[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ coursesData, booksData, musicData }) => {
    return (
        <section
            className="flex flex-col p-5 h-full md:h-screen overflow-hidden md:w-[50%]"
        >
            <div className='max-h-full md:max-h-screen overflow-y-auto'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">ПРОШЁЛ КУРСЫ</div>
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

            <div className='max-h-full md:max-h-screen overflow-y-auto mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Книжки</div>
                    <ul className='mt-4'>
                        {booksData.map((bookGroup, idx) => (
                            <li key={idx} className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{bookGroup.title}</h3>
                                <ul>
                                    {bookGroup.books.map((book, bookIdx) => (
                                        <li key={bookIdx} className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline"><a href={book.link} target='_blank'>{book.name}</a></li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='max-h-full md:max-h-screen overflow-y-auto mt-4'>
                <div className='bg-[#ffffff08] rounded-[16px] p-6'>
                    <div className="text-[#FFFFFF] text-[16px] italic font-[400] leading-[22px] tracking-[1.6px] text-center border-b border-[#d9d9d914] pb-4 mb-4 eb-garamond">Интересное</div>
                    <ul className='mt-4'>
                        {musicData.map((musicGroup, idx) => (
                            <li key={idx} className="grid grid-cols-2 border-b border-[#d9d9d914] pb-4 mb-4 last:border-none last:mb-0 last:pb-0">
                                <h3 className="text-[#ffffff3d] text-[16px] italic font-[400] leading-[22px] eb-garamond">{musicGroup.title}</h3>
                                <ul>
                                    {musicGroup.playlist.map((music, musicIdx) => (
                                        <li key={musicIdx} className="text-[#FFD600] text-[16px] italic font-[400] leading-[22px] eb-garamond hover:cursor-pointer hover:underline"><a href={music.link} target='_blank'>{music.name}</a></li>
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