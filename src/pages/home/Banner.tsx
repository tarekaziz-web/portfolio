import { DribbbleIcon, Facebook, GithubIcon, Linkedin, Twitter } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Hero1Props {
    badge?: string;
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    image?: {
        src: string;
        alt: string;
    };
}


const Hero = ({

    heading = "I'm Frontend  Web Developer",
    description = "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    buttons = {
        primary: {
            text: " Get Resume ",
            url: "#",
        },
    },
    image = {
        src: "https://i.postimg.cc/4xLSyDWx/profile-pic.png",
        alt: "Hero section demo image showing interface components",
    },
}: Hero1Props) => {
    return (
        <section className="py-24 bg-[#FFF0E1]">
            <div className="container mx-auto ">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <p className="  text-2xl font-semibold">Hi I'm Tarek Aziz</p>
                        <h1 className="my-5 text-pretty text-4xl font-semibold lg:text-5xl lg:max-w-[13ch]">
                            {heading}
                        </h1>
                        <p className="text-accent-foreground mb-5 max-w-xl lg:text-xl">
                            {description}
                        </p>
                        <div className=" flex gap-2.5">

                            <div className="h-10 w-10 rounded-md border flex justify-center items-center">
                                <Link to="https://github.com/tarekaziz-web">
                                    <GithubIcon />
                                </Link>
                            </div>

                            <div className="h-10 w-10 rounded-md border flex justify-center items-center">
                                <Link to="#">
                                    <Linkedin />
                                </Link>
                            </div>
                            <div className="h-10 w-10 rounded-md border flex justify-center items-center">
                                <Link to="#">
                                    <Twitter />
                                </Link>
                            </div>
                            <div className="h-10 w-10 rounded-md border flex justify-center items-center">
                                <Link to="#">
                                    <Facebook />
                                </Link>
                            </div>
                            <div className="h-10 w-10 rounded-md border flex justify-center items-center">
                                <Link to="#">
                                    <DribbbleIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="bg-[#5A3C2F] w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}

                        </div>
                    </div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="mx-auto max-h-96 max-w-96 rounded-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
