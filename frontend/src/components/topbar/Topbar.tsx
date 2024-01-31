import { SearchIcon } from "@/resources/icons/SearchIcon";
import { UserNav } from "./UserNav";

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
            className="search-input"
            placeholder="Search for anything...."
            required
          />
        </div>
      </div>

      <div className="flex pr-8">
        <UserNav />
      </div>
    </div>
  );
};

export default TopBar;
