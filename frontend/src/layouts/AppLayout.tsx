import { useState } from "react";
import { CommandLineIcon } from "@heroicons/react/24/solid";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";
import { cn } from "@/lib/utils";

import Nav from "../components/sidebar/Nav";
import { ProjectIcon } from "@/resources/icons/ProjectIcon";
import { TaskIcon } from "@/resources/icons/TaskIcon";

const AppLayout = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full items-stretch"
    >
      <ResizablePanel
        defaultSize={20}
        className={cn(
          isCollapsed && "min-w-[75px] transition-all duration-300 ease-in-out"
        )}
        collapsible={true}
        collapsedSize={4}
        minSize={15}
        maxSize={20}
        onCollapse={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="h-screen">
          {/* Brand */}
          <div className="p-6 border-b-1 border-border">
            <h1 className="text-lg text-title font-medium ml-2 flex items-center">
              <CommandLineIcon className="h-8 w-8 mr-2 text-black" />
              <span className={cn(isCollapsed && "hidden")}>Better Notion</span>
            </h1>
          </div>

          {/* Menu */}
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Projects",
                icon: ProjectIcon,
                path: "/",
              },
              {
                title: "Tasks",
                icon: TaskIcon,
                path: "/tasks",
              },
            ]}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="resizeHandleSidebar" />
      <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default AppLayout;
