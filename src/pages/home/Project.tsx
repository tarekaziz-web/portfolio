import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { project } from "../../data/data";

const Project = () => {
    return (
        <section className=" bg-gradient-to-b from-[#FFF4E6] via-[#FFFDF8] to-[#FFF4E6] py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-black">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        My Projects
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Some of my recent works as a Frontend Developer — focused on
                        responsive design, clean UI, and performance.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {project.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-gradient-to-t from-[#FFF7EF] via-[#FFE8D6] to-[#FFDCC3] border-none shadow-sm hover:shadow-lg transform transition duration-700 hover:scale-105 rounded-xl overflow-hidden flex flex-col"
                        >
                            {/* Project Image */}
                            <CardHeader className="p-2 pb-0">
                                <div className="aspect-video overflow-hidden rounded-lg w-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-md "
                                    />
                                </div>
                            </CardHeader>

                            {/* Project Content */}
                            <CardContent className="flex flex-col flex-grow justify-between px-5 pt-4 pb-6">
                                <div>
                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {["React", "Tailwind", "TypeScript"].map((tech, index) => (
                                            <Badge
                                                key={index}
                                                className="bg-[#5A3C2F] text-white text-xs px-3 py-1 rounded-md"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Title + Description */}
                                    <h3 className="text-xl font-semibold tracking-tight text-black">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-between gap-2 mt-6">
                                    <Button
                                        asChild
                                        size="sm"
                                        className="flex-1 shadow-none text-white bg-[#5A3C2F] hover:bg-[#4b3126]"
                                    >
                                        <Link to={item.live} target="_blank">
                                            Live <ChevronRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm"
                                        className="flex-1 shadow-none text-white bg-[#5A3C2F] hover:bg-[#4b3126]"
                                    >
                                        <Link to={item.code} target="_blank">
                                            Code <ChevronRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
