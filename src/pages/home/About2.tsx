import { Card, CardContent } from "@/components/ui/card";

const About2 = () => {
    const stats = [
        { num: "25+", label: "Completed Projects" },
        { num: "100%", label: "Client Satisfaction" },
        { num: "12+", label: "On-Going Projects" },
        { num: "02+", label: "Years of Experience" },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#FFF4E6] via-[#FFFDF8] to-[#FFF4E6]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
                <h2 className="text-4xl pb-12 md:text-5xl font-bold text-center tracking-tight text-[#7C3E3B]">
                    About Me
                </h2>

                <div className="flex flex-col gap-12">
                    {/* Top section: Image + Text */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <Card className="bg-[#FFF0E1] flex justify-center items-center transform transition duration-700 hover:scale-105">
                            <img
                                src="/profile-pic.png"
                                alt="Tarek Aziz"
                                className="w-[80%] max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] rounded-md object-cover mx-auto shadow-lg"
                            />
                        </Card>

                        <Card className="bg-[#FFF0E1] lg:col-span-2 flex items-center justify-center p-6 transform transition duration-700 hover:scale-105">
                            <div className="flex flex-col gap-5">
                                <p className="text-xl font-semibold lg:text-3xl text-[#5A3C2F]">
                                    I’m Tarek Aziz
                                </p>

                                <p className="leading-7 text-gray-800 text-justify">
                                    Hi, I’m Tarek Aziz — a frontend web developer passionate about
                                    building clean, responsive, and visually engaging web experiences.
                                    I work with HTML, CSS, JavaScript, TypeScript, and React, focusing
                                    on writing efficient and maintainable code.
                                    <br />
                                    <br />
                                    I enjoy turning concepts into smooth, real-world interfaces that
                                    feel great to use. My goal is to create modern, high-performance
                                    products with a seamless user experience.
                                    <br />
                                    <br />
                                    I’m always curious about new technologies, design trends, and
                                    improving my workflow. Let’s build something creative and meaningful
                                    for the web.
                                </p>

                                <p className="text-[#7C3E3B] font-medium mt-3">
                                    Frontend Web Developer
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {stats.map((item, i) => (
                            <Card
                                key={i}
                                className="bg-[#FFF0E1] text-center py-6 transform transition duration-700 hover:scale-105 shadow-md"
                            >
                                <CardContent className="text-[44px] md:text-5xl font-semibold text-[#5A3C2F]">
                                    {item.num}
                                </CardContent>
                                <p className="text-gray-700 text-xl font-medium">{item.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
