const icon = [
    { name: "HTML", imageUrl: "/public/html5.svg" },
    { name: "CSS", imageUrl: "/public/css_old.svg" },
    { name: "Tailwind", imageUrl: "/public/tailwindcss.svg" },
    { name: "Javascript", imageUrl: "/public/javascript.svg" },
    { name: "Typescript", imageUrl: "/public/typescript.svg" },
    { name: "React", imageUrl: "/public/react_light.svg" },
    { name: "Redux", imageUrl: "/public/redux.svg" },
    { name: "Next Js", imageUrl: "/public/nextjs_icon_dark.svg" },
]

const icon2 = [

    { name: "Node Js", imageUrl: "/public/nodejs.svg" },
    { name: "MongoDB", imageUrl: "/public/mongodb-original-wordmark.svg" },
    { name: "Express JS", imageUrl: "/public/expressjs.svg" },
    { name: "Laravel", imageUrl: "/public/laravel.svg" },
];



const Skills = () => (
    <div className=" bg-[#FFF0E1]">
        <div className="container mx-auto">
            <div className=" flex items-center justify-center py-24  pb-14">
                <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="mt-4 text-theme3 text-4xl sm:text-5xl font-semibold tracking-tighter">
                            My Skills
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            As a Frontend Developer Skilled in building responsive and interactive user interfaces using HTML, CSS, JavaScript, TypeScript and React. Passionate about clean code, modern design, and creating seamless user experiences with attention to detail and performance
                        </p>
                    </div>
                    <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div className="bg-[#FCF8F4] grid grid-cols-4 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 border border-dashed  p-6 rounded-lg">
                            {icon.map((icon, index) => (
                                <div key={index} className="flex flex-col items-center justify-center min-w-[100px]">
                                    <div className="h-20 w-20 rounded-full bg-secondary flex justify-center items-center">
                                        <img className="h-12 w-12" src={icon.imageUrl} alt="image" />
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold">{icon.name}</h3>
                                </div>
                            ))}

                        </div>
                        <div className="bg-[#FCF8F4] grid grid-cols-4 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 border border-dashed  p-6 rounded-lg">
                            {icon2.map((icon, index) => (
                                <div key={index} className="flex flex-col items-center justify-center min-w-[100px]">
                                    <div className="h-20 w-20 rounded-full bg-secondary flex justify-center items-center">
                                        <img className="h-12 w-12" src={icon.imageUrl} alt="image" />
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold">{icon.name}</h3>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default Skills;

