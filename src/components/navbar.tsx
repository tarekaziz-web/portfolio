
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Button } from "@/components/ui/button";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="  bg-muted">
      <nav className=" h-16 bg-[#2A1C1D] fixed  z-20 w-full">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button className="text-white bg-[#5A3C2F]">
              Resume
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
