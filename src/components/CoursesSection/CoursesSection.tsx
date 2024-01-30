import React from 'react';

interface CourseGroup {
    title: string;
    courses: string[];
}

interface CoursesSectionProps {
    coursesData: CourseGroup[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ coursesData }) => {
    return (
        <section
            className="flex flex-col p-5 h-full md:h-screen overflow-hidden"
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

                <div className='bg-[#ffffff08] rounded-[16px] p-6 mt-4'>
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

        </section>
    );
};

export default CoursesSection;