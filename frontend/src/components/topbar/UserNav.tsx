import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center bg-search focus:outline-none focus:border-1 focus:border-border p-1 rounded-full"
        >
          <Avatar className="h-9 w-9 flex items-center justify-center">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="user-nav" align="end" forceMount>
        <DropdownMenuLabel className="font-normal p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Lucas Boistard</p>
            <p className="text-xs leading-none text-grey-5">
              lucas.boistard@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-0.5 border-border" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="user-nav-item">
            Profile
            <DropdownMenuShortcut className="text-xs text-grey-5">
              ⇧⌘P
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="border-0.5 border-border" />
        <DropdownMenuItem className="user-nav-item">
          Log out
          <DropdownMenuShortcut className="text-xs text-grey-5">
            ⇧⌘Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
