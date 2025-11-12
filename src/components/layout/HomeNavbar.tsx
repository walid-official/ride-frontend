import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import role from "@/constants/role";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useProfileInfoQuery, userApi } from "@/redux/features/user/user.api";
import { useAppDispatch } from "@/redux/hooks";
import { Link } from "react-router";
import { toast } from "sonner";
import ThemeToggler from "./ThemeToggler";

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

const HomeNavbar = () => {
  const { data } = useProfileInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const email = data?.data?.email;
  const userRole = data?.data?.role;

  const handleLogout = async () => {
    try {
      const result = await logout(null).unwrap();
      dispatch(userApi.util.resetApiState());
      toast.success(result.message || "Logged out successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <header className="py-3 w-full">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="tracking-tight text-accent text-3xl font-bold">
          RideWave
        </Link>

        {/* Right: Theme + Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggler />
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-center">Menu</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-4">
                    {navigationLinks.map((link, index) => {
                      if (link.role === "PUBLIC" || link.role === userRole) {
                        return (
                          <DrawerClose asChild key={index}>
                            <Link
                              to={link.href}
                              className="text-white tracking-tight tight transition-colors text-lg font-medium py-2"
                            >
                              {link.label}
                            </Link>
                          </DrawerClose>
                        );
                      }
                      return null;
                    })}
                  </nav>

                  {/* Bottom buttons */}
                  <div className="mt-8 flex flex-col gap-4 pb-4">
                    {email ? (
                      <Button onClick={handleLogout} className="w-full">
                        Logout
                      </Button>
                    ) : (
                      <DrawerClose asChild>
                        <Link to="/login">
                          <Button className="w-full">Login</Button>
                        </Link>
                      </DrawerClose>
                    )}
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;