import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./ui/resizable";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";
import { PanelOne } from "./PanelOne";
import { PanelTwo } from "./PanelTwo";
import Button from "./ui/button";
export default function Forecast() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={25}
          maxSize={30}
          collapsedSize={0}
          className={
            "flex flex-col max-w-[420px] grow " + (isCollapsed ? "hidden" : "")
          }
        >
          <PanelOne />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={70} className="relative flex flex-col grow">
          <Button
            className="absolute top-4 left-0 bg-[#66FFE1]/60 hover:bg-[#66FFE1]/75 p-1 text-black rounded-none font-bold"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
          </Button>
          <PanelTwo />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}