import { motion } from "framer-motion";
import { GithubIcon, Linkedin, Twitter, Facebook, DribbbleIcon } from "lucide-react";

const socialIcons = [
    { icon: <GithubIcon />, url: "https://github.com/tarekaziz-web" },
    { icon: <Linkedin />, url: "#" },
    { icon: <Twitter />, url: "#" },
    { icon: <Facebook />, url: "#" },
    { icon: <DribbbleIcon />, url: "#" },
];

const Hero1 = () => {
    return (
        <section className="pt-20 pb-24 overflow-hidden relative">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FFF7EF] via-[#FFE8D6] to-[#FFDCC3] animate-gradient-x"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text Section */}
                    <motion.div
                        className="flex flex-col items-center text-center text-gray-900 lg:items-start lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-2xl font-semibold text-[#5A3C2F]">Hi I'm Tarek Aziz</p>

                        <motion.h1
                            className="my-5 text-4xl font-bold lg:text-5xl lg:max-w-[13ch] text-[#7C3E3B]"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            I'm a Frontend Web Developer
                        </motion.h1>

                        <motion.p
                            className="text-gray-700 mb-5 max-w-xl lg:text-xl"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            I am a motivated and versatile individual, always eager to take on
                            new challenges. With a passion for learning I am dedicated to
                            delivering high-quality results.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            className="flex gap-3 flex-wrap justify-center lg:justify-start mt-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.2 } },
                            }}
                        >
                            {socialIcons.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#5A3C2F] hover:text-white transition-colors duration-300"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Button */}
                        <motion.div
                            className="mt-6 flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <button className="text-white bg-[#5A3C2F] hover:bg-[#4B2F24] px-6 py-2 rounded-md w-full sm:w-auto transition-colors duration-300">
                                Get Resume
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end px-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <img
                            src="/profile-pic.png"
                            alt="Tarek Aziz"
                            className="w-[80%] max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] rounded-full object-cover shadow-lg"
                        />
                    </motion.div>
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
        </section>
    );
};

export { Hero1 };
