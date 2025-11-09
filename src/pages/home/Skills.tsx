
const icon = [
    { name: "HTML", imageUrl: "/html5.svg" },
    { name: "CSS", imageUrl: "/css_old.svg" },
    { name: "Tailwind", imageUrl: "/tailwindcss.svg" },
    { name: "Javascript", imageUrl: "/javascript.svg" },
    { name: "Typescript", imageUrl: "/typescript.svg" },
    { name: "React", imageUrl: "/react_light.svg" },
    { name: "Redux", imageUrl: "/redux.svg" },
    { name: "Next Js", imageUrl: "/nextjs_icon_dark.svg" },
]

const icon2 = [

    { name: "Node Js", imageUrl: "/nodejs.svg" },
    { name: "MongoDB", imageUrl: "/mongodb-original-wordmark.svg" },
    { name: "Express JS", imageUrl: "/expressjs.svg" },
    { name: "Laravel", imageUrl: "/laravel.svg" },
];



const Skills = () => (
    <div className=" bg-gradient-to-l from-[#FFF7EF] via-[#FFE8D6] to-[#FFDCC3] animate-gradient-x">
        <div className="container mx-auto">
            <div className=" flex items-center justify-center py-24  pb-14">
                <div className="w-full max-w-(--breakpoint-xl) text-black mx-auto px-6 xl:px-0">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="mt-4 text-theme3 text-4xl sm:text-5xl font-semibold tracking-tighter">
                            My Skills
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            As a Frontend Developer Skilled in building responsive and interactive user interfaces using HTML, CSS, JavaScript, TypeScript and React. Passionate about clean code, modern design, and creating seamless user experiences with attention to detail and performance
                        </p>
                    </div>
                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {/* First skill group */}
                        <div className="bg-[#FFF0E1] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border border-dashed p-6 rounded-lg">
                            {icon.map((icon, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center transform transition duration-500 hover:scale-105"
                                >
                                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white flex justify-center items-center shadow-md ">
                                        <img
                                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain "
                                            src={icon.imageUrl}
                                            alt={icon.name}
                                        />
                                    </div>
                                    <h3 className="mt-2 text-sm sm:text-base font-medium break-words">
                                        {icon.name}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Second skill group */}
                        <div className="bg-[#FFF0E1] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border border-dashed p-6 rounded-lg">
                            {icon2.map((icon, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center transform transition duration-500 hover:scale-105"
                                >
                                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white flex justify-center items-center shadow-md">
                                        <img
                                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                                            src={icon.imageUrl}
                                            alt={icon.name}
                                        />
                                    </div>
                                    <h3 className="mt-2 text-sm sm:text-base font-medium break-words">
                                        {icon.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
        {/* Tailwind Gradient Animation */}
        <style>
            {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
        `}
        </style>
    </div>
);

export default Skills;

