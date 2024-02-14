import { useQuery } from "@tanstack/react-query";

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
import ApiManager from "@/apiManager/ApiManager";

interface meI {
  data: {
    user: {
      email: string;
      name: string;
      _id: string;
    };
  };
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export function UserNav() {
  const { data, isLoading, isError }: meI = useQuery({
    queryKey: ["me"],
    queryFn: ApiManager.getMe,
  });

  if (isLoading) return <>loading</>;

  if (isError) return <>Error</>;

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
            <p className="text-sm font-medium leading-none">
              {data?.user.name}
            </p>
            <p className="text-xs leading-none text-grey-5">
              {data?.user?.email}
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
