/* eslint-disable  */
import { ArrowRight, MenuIcon, SearchIcon, BellIcon } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full h-24 p-6 flex border-grey-1" style={{borderBottomWidth: 1}}>
      <div className="flex justify-start w-3/12">
        <button
          className={`
          h-12 w-12 flex justify-center items-center 
          mr-9 rounded-full bg-white hover:shadow-lg shadow-indigo-500/50
          `}
        >
          <MenuIcon className="h-6 w-6 text-grey-1" />
        </button>

        {/* Brand */}
        <h1 className="text-lg text-title font-medium ml-2 flex items-center">
          Better Notion
        </h1>
      </div>
      <div className="flex justify-center w-6/12">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full ">
            {/* search icon */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <SearchIcon className="text-grey-1"/>
            </div>

            <input type="search" id="default-search" className="hover:shadow-lg shadow-indigo-500/50 rounded-full block w-full p-4 ps-12 text-sm text-gray-900 bg-gray-50 " placeholder="Search tasks, projects and contacts..." required />
            
            <button className="absolute end-2.5 bottom-2.5">
              <ArrowRight className="text-grey-1"/>
            </button>
          </div>
      </div>
      
      <div className="flex justify-end  w-3/12">
        <button
          className={`
          h-12 w-12 flex justify-center items-center 
          rounded-full bg-white hover:shadow-lg shadow-indigo-500/50
          `}
        >
          <BellIcon className="h-6 w-6 text-grey-1" />
        </button>
      </div>
    </div>
  )
}

export default Topbar;
