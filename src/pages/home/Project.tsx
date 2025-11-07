

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { project } from './../../data/data';


const Project = () => {
    return (
        <div className="bg-[#FCF8F4]">
            <div className="container mx-auto ">
                <div className="max-w-(--breakpoint-xl) py-24  xl:px-0">
                    <div className="text-center">
                        <h2 className=" text-4xl sm:text-5xl font-semibold tracking-tighter">
                            My Projects
                        </h2>
                        <p className="mt-4 mb-9 text-base sm:text-lg text-muted-foreground">
                            My work experience as a frontend developer and working on different
                            companies and projects.
                        </p>
                    </div>
                    <div className=" mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {project.map((item) => (
                            <Card key={item.id} className="bg-[#FFF0E1] shadow-none py-0 gap-3">
                                <CardHeader className="p-2 pb-0">
                                    <div className="aspect-video bg-muted rounded-lg w-full" >
                                        <img className="rounded-md" src={item.image} alt="image" />
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0 pb-5 px-5">
                                    <div className="flex">
                                        <Badge className="mr-2.5" variant="secondary">React</Badge>
                                        <Badge className="mr-2.5" variant="secondary">Tailwind</Badge>
                                        <Badge className="mr-2.5" variant="secondary">TypeScript</Badge>
                                        <div className="ml-auto">
                                            <Badge variant="secondary"> {item.date}</Badge>
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-[1.4rem] font-semibold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground line-clamp-3">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-around">

                                        <Button asChild size="sm" className="mt-8 shadow-none bg-[#5A3C2F]">
                                            <Link to={item.live}>
                                                View Live <ChevronRight />
                                            </Link>
                                        </Button>
                                        <Button asChild size="sm" className="mt-8 shadow-none bg-[#5A3C2F]">
                                            <Link to={item.code}>
                                                View Code <ChevronRight />
                                            </Link>
                                        </Button>

                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;
