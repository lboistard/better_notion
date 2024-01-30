/* eslint-disable */
import { SearchIcon } from "@/resources/icons/SearchIcon";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const TopBar = () => {
  return (
    <div className="flex h-[81px] w-full justify-between items-center border-border border-b-1 ">
      <div className="w-108 pl-8">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
          </div>

          <input
            type="search"
            className="block w-full p-4 ps-12 text-sm rounded-lg bg-search  focus:outline-none focus:border-1 focus:border-border"
            placeholder="Search for anything...."
            required
          />
        </div>
      </div>

      <div className="flex pr-8">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">m@example.com</p>
          </div>
          <Avatar>
            <AvatarImage src="/avatars/01.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
