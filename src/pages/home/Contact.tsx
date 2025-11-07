import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import { Link } from "react-router";

const Contact = () => (
    <div className=" bg-[#FFF0E1]">
        <div className=" container mx-auto">
            <div className="flex items-center justify-center py-24 px-16">
                <div className="text-black w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
                    <h2 className="mt-3 text-4xl font-semibold text-theme3 text-center  md:text-5xl tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="mt-3 text-center text-base sm:text-lg text-muted-foreground">
                        Feel free to reach out for collaborations or just a friendly hello and shoot me
                        an email.
                    </p>
                    <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            <div className="text-black">
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                                    <MailIcon className="text-black" />
                                </div>
                                <h3 className="mt-3 font-semibold text-xl">Email</h3>
                                <p className="my-1.5 text-muted-foreground">
                                    Our friendly team is here to help.
                                </p>
                                <Link
                                    className="font-medium text-black"
                                    to="mailto:akashmoradiya3444@gmail.com"
                                >
                                    tarekaziz.web@gmail.com
                                </Link>
                            </div>
                            <div className="text-black">
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                                    <MessageCircle className="text-black" />
                                </div>
                                <h3 className="mt-3 font-semibold text-xl">Live chat</h3>
                                <p className="my-1.5 text-muted-foreground">
                                    Our friendly team is here to help.
                                </p>
                                <Link className="font-medium text-black" to="#">
                                    Start new chat
                                </Link>
                            </div>
                            <div className="text-black">
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                                    <MapPinIcon className="text-black" />
                                </div>
                                <h3 className="mt-3 font-semibold text-xl">Office</h3>
                                <p className="my-1.5 text-muted-foreground">
                                    Come say hello at our office HQ.
                                </p>
                                <Link
                                    className="font-medium text-black"
                                    to="https://map.google.com"
                                    target="_blank"
                                >
                                    1230 Uttara,Dhaka,  <br /> Bangladesh.
                                </Link>
                            </div>
                            <div className="text-black">
                                <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                                    <PhoneIcon className="text-black" />
                                </div>
                                <h3 className="mt-3 font-semibold text-xl">Phone</h3>
                                <p className="my-1.5 text-muted-foreground">
                                    Mon-Fri from 8am to 5pm.
                                </p>
                                <Link
                                    className="font-medium text-black"
                                    to="tel:akashmoradiya3444@gmail.com"
                                >
                                    +880 1564 654784
                                </Link>
                            </div>
                        </div>

                        {/* Form */}
                        <Card className="bg-white text-black shadow-none py-0">
                            <CardContent className="p-6 md:p-8">
                                <form>
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                placeholder="First name"
                                                id="firstName"
                                                className="mt-2 bg-white border h-10 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                placeholder="Last name"
                                                id="lastName"
                                                className="mt-2 bg-white border h-10 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                className="mt-2 bg-white border h-10 shadow-none"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Message"
                                                className="mt-2 bg-white border shadow-none"
                                                rows={6}
                                            />
                                        </div>
                                        <div className="col-span-2 flex items-center gap-2">
                                            <Checkbox id="acceptTerms" className="bg-white border " />
                                            <Label htmlFor="acceptTerms" className="gap-0">
                                                You agree to our
                                                <Link to="#" className="underline ml-1">
                                                    terms and conditions
                                                </Link>
                                                <span>.</span>
                                            </Label>
                                        </div>
                                    </div>
                                    <Button className="mt-6 w-full text-white bg-[#5A3C2F]" size="lg">
                                        Submit
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
