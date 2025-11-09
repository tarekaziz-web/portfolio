import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";

const Contact = () => {
    return (
        <section className="bg-gradient-to-r from-[#FFF7EF] via-[#FFE8D6] to-[#FFDCC3] animate-gradient-x text-black py-20 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5A3C2F]">Get In Touch</h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Feel free to reach out for collaborations or just say hello 👋
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {[
                            {
                                icon: Mail,
                                title: "Email",
                                desc: "Our friendly team is here to help.",
                                value: "tarekaziz.web@gmail.com",
                                href: "mailto:tarekaziz.web@gmail.com",
                            },
                            {
                                icon: MessageCircle,
                                title: "Live Chat",
                                desc: "Chat with us directly anytime.",
                                value: "Start new chat",
                                href: "#",
                            },
                            {
                                icon: MapPin,
                                title: "Office",
                                desc: "Come say hello at our HQ.",
                                value: "Uttara, Dhaka, Bangladesh",
                                href: "https://maps.google.com",
                            },
                            {
                                icon: Phone,
                                title: "Phone",
                                desc: "Mon–Fri from 8am to 5pm.",
                                value: "+880 1564 654784",
                                href: "tel:+8801564654784",
                            },
                        ].map(({ icon: Icon, title, desc, value, href }, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="h-12 w-12 flex items-center justify-center bg-[#5A3C2F]/10 rounded-full">
                                    <Icon className="text-[#5A3C2F]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{title}</h3>
                                    <p className="text-sm text-muted-foreground">{desc}</p>
                                    <Link
                                        to={href}
                                        target="_blank"
                                        className="block mt-1 text-[#5A3C2F] font-medium hover:underline"
                                    >
                                        {value}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <Card className="bg-white/90 backdrop-blur-md border border-[#5A3C2F]/20 shadow-sm">
                        <CardContent className="p-6 sm:p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="Enter your first name" className="mt-2" />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Enter your last name" className="mt-2" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Enter your email" className="mt-2" />
                                </div>

                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Write your message..."
                                        rows={5}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-start gap-2 text-sm">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms" className="leading-tight">
                                        I agree to the
                                        <Link to="#" className="underline ml-1 text-[#5A3C2F]">
                                            terms & conditions
                                        </Link>
                                        .
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#5A3C2F] text-white hover:bg-[#4B2F24]"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
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

export default Contact;
