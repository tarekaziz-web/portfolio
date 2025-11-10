import FrontLayout from "@/components/layout/FrontLayout";
import HomePage from "@/pages/home";
import About2 from "@/pages/home/About2";
import Contact from "@/pages/home/Contact";
import Project from "@/pages/home/Project";
import Skills from "@/pages/home/Skills";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/about",
                Component: About2
            },
            {
                path: "/skills",
                Component: Skills
            },
            {
                path: "/projects",
                Component: Project
            },
            {
                path: "/contact",
                Component: Contact
            },

        ]
    },
]);


export default router