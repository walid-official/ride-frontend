"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import role from "@/constants/role";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useProfileInfoQuery, userApi } from "@/redux/features/user/user.api";
import { useAppDispatch } from "@/redux/hooks";
import { Link } from "react-router";
import { toast } from "sonner";
import ThemeToggler from "./ThemeToggler";
import { Menu, X } from "lucide-react";

//  Common navigation links
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact-us", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.ADMIN },
  { href: "/driver", label: "Dashboard", role: role.DRIVER },
  { href: "/user", label: "Dashboard", role: role.RIDER },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data } = useProfileInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const email = data?.data?.email;
  const userRole = data?.data?.role;

  //  Logout Handler
  const handleLogout = async () => {
    try {
      const result = await logout(null).unwrap();
      dispatch(userApi.util.resetApiState());
      toast.success(result.message || "Logged out successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Logout failed");
    }
  };

  return (
    <header className=" w-full py-3  bg-background/80 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/*  Left Section: Logo + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <Link to="/" className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="logo" className="h-8 w-auto" /> */}
            <h1 className="text-xl font-bold text-primary">RideWave</h1>
          </Link>
        </div>

        {/*  Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-6">
            {navigationLinks.map((link, index) => {
              if (link.role === "PUBLIC" || link.role === userRole)
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/*  Right Section */}
        <div className="flex items-center gap-2">
          {email ? (
            <Button onClick={handleLogout} className="text-sm">
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="text-sm">Login</Button>
            </Link>
          )}
          <ThemeToggler />
        </div>
      </div>

      {/*  Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40  z-40  duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/*  Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background  shadow-lg z-50 p-5 flex flex-col justify-between transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <h2 className="text-2xl font-bold text-primary">RideWave</h2>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navigationLinks.map((link, index) => {
              if (link.role === "PUBLIC" || link.role === userRole)
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary font-medium text-base transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
            })}
          </nav>
        </div>

        {/*  Bottom: Login/Logout + Theme */}
        <div className="pt-6 border-t border-border flex items-center justify-between">
          {email ? (
            <Button onClick={handleLogout} variant="outline" size="sm">
              Logout
            </Button>
          ) : (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          )}
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
