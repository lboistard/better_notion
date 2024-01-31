import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: any;
    path: string;
  }[];
}

const Nav = ({ links, isCollapsed }: NavProps) => {
  const pathname = useLocation().pathname;

  return (
    <div data-collapsed={isCollapsed} className="grid p-6">
      <nav className="grid gap-1 px-2 w-full">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={cn(
              "flex items-center p-2 rounded-md",
              pathname === link.path
                ? "text-title font-semibold bg-primary-700"
                : "text-grey-7 hover:bg-search"
            )}
          >
            <link.icon fill={pathname === link.path && "#0D062D"} />
            <span className="ml-3">{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
