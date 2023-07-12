import { OpenDrawerIcon } from "@/icons/OpenDrawer";
import { useAtom } from "jotai";
import { DrawerOpenAtom } from "./store";

type OpenDrawerProps = {
  drawerTitle: string;
};

export function OpenDrawer({ drawerTitle }: OpenDrawerProps): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useAtom(DrawerOpenAtom(drawerTitle));
  return (
    <button
      className="w-[30px] h-[30px] flex justify-center items-center absolute rounded-[6px] hover:bg-hoverElement right-4 top-4 disabled:opacity-0 disabled:-z-10"
      onClick={() => {
        setDrawerOpen(!drawerOpen);
      }}
      style={{
        display: !drawerOpen ? "flex" : "none",
      }}
      disabled={drawerOpen}
    >
      <OpenDrawerIcon height="20px" width="20px" mainColor="#fff" />
    </button>
  );
}
