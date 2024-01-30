import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsh-full tailwind.config.jsw-full data-[panel-group-direction=vertical]:tailwind.config.jsflex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsw-px tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsbg-slate-200 after:tailwind.config.jsabsolute after:tailwind.config.jsinset-y-0 after:tailwind.config.jsleft-1/2 after:tailwind.config.jsw-1 after:tailwind.config.js-translate-x-1/2 focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-1 focus-visible:tailwind.config.jsring-slate-950 focus-visible:tailwind.config.jsring-offset-1 data-[panel-group-direction=vertical]:tailwind.config.jsh-px data-[panel-group-direction=vertical]:tailwind.config.jsw-full data-[panel-group-direction=vertical]:after:tailwind.config.jsleft-0 data-[panel-group-direction=vertical]:after:tailwind.config.jsh-1 data-[panel-group-direction=vertical]:after:tailwind.config.jsw-full data-[panel-group-direction=vertical]:after:tailwind.config.js-translate-y-1/2 data-[panel-group-direction=vertical]:after:tailwind.config.jstranslate-x-0 [&[data-panel-group-direction=vertical]>div]:tailwind.config.jsrotate-90 dark:tailwind.config.jsbg-slate-800 dark:focus-visible:tailwind.config.jsring-slate-300",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="tailwind.config.jsz-10 tailwind.config.jsflex tailwind.config.jsh-4 tailwind.config.jsw-3 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-sm tailwind.config.jsborder tailwind.config.jsborder-slate-200 tailwind.config.jsbg-slate-200 dark:tailwind.config.jsborder-slate-800 dark:tailwind.config.jsbg-slate-800">
        <DragHandleDots2Icon className="tailwind.config.jsh-2.5 tailwind.config.jsw-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
