import { cn } from "@/lib/utils";

interface NavProps {
  isCollapsed: boolean;
  links: {
    active: boolean;
    title: string;
    icon: any;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div data-collapsed={isCollapsed} className="grid p-6">
      <nav className="grid gap-1 px-2 w-full">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "flex items-center p-2 rounded-md",
              link.active
                ? "text-title font-semibold  bg-primary-700"
                : " text-grey-7 "
            )}
          >
            <link.icon fill={link.active && "#0D062D"} />
            <span className="ml-3">{link.title}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
