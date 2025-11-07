
import { Card, CardContent, } from "@/components/ui/card";

const About = () => {
    return (
        <section className="py-24 bg-[#FCF8F4]">
            <div className="container mx-auto text-black">
                <h2 className="text-4xl pb-10  md:text-5xl font-semibold text-center tracking-tight">
                    About me
                </h2>
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
                        <Card className="bg-[#FFF0E1]">
                            <img
                                src="https://i.postimg.cc/4xLSyDWx/profile-pic.png"
                                alt="placeholder"
                                className="h-72 w-72 rounded-md object-cover mx-auto lg:h-auto"
                            />

                        </Card>

                        <Card className="bg-[#FFF0E1] col-span-2 flex items-center justify-center p-6">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-medium lg:text-3xl ">
                                    I’m Tarek Aziz
                                </p>
                                <div className="flex flex-col items-start">
                                    <p className=" leading-7" >
                                        Hi, I’m Tarek Aziz — a frontend web developer who loves building clean, responsive, and visually engaging web experiences. I work mainly with HTML,CSS,JavaScript,TypeScript and React, focusing on writing efficient and maintainable code that brings ideas to life.
                                        I enjoy turning concepts into smooth, real-world interfaces that feel great to use. My main goal is to create products that look modern, perform fast, and provide a seamless user experience.
                                        I’m always curious about new technologies, design trends, and better ways to improve my workflow. Right now, I’m continuously learning and refining my skills to grow into a more versatile and confident developer.
                                        Let’s build something creative, useful, and meaningful for the web
                                    </p>
                                    <p className="text-muted-foreground mt-3">Frontend Web Developer</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <Card className="bg-[#FFF0E1]">
                            <CardContent className="px-6 pt-6 text-5xl text-center">
                                <p>
                                    25+
                                </p>
                            </CardContent>
                            <div className="text-sm">
                                <p className="text-muted-foreground text-2xl text-center">Completed Projects</p>
                            </div>
                        </Card>
                        <Card className="bg-[#FFF0E1]">
                            <CardContent className="px-6 pt-6 text-5xl text-center">
                                <p>
                                    100%
                                </p>
                            </CardContent>
                            <div className="text-sm">
                                <p className="text-muted-foreground text-2xl text-center">Client Satisfaction</p>
                            </div>
                        </Card>
                        <Card className="bg-[#FFF0E1]">
                            <CardContent className="px-6 pt-6 text-5xl text-center">
                                <p>
                                    12+
                                </p>
                            </CardContent>
                            <div className="text-sm">
                                <p className="text-muted-foreground text-2xl  text-center">On-Going Projects</p>
                            </div>
                        </Card>
                        <Card className="bg-[#FFF0E1]">
                            <CardContent className="px-6 pt-6 text-5xl text-center">
                                <p>
                                    02+
                                </p>
                            </CardContent>
                            <div>
                                <p className="text-muted-foreground text-2xl  text-center ">Years of Experience</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
