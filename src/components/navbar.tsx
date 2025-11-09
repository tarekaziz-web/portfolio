import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full bg-[#2A1C1D] h-16">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        {/* Resume Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button asChild className="text-white bg-[#5A3C2F]">
            <a href="/resume.pdf" target="_blank">Resume</a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
