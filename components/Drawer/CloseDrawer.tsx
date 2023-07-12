import { CloseDrawerIcon } from "@/icons/CloseDrawer";
import { useAtom } from "jotai";
import { ClickableIcon } from "../ClickableIcon";
import { DrawerOpenAtom } from "./store";

type CloseDrawerProps = {
  drawerTitle: string;
};

export function CloseDrawer({ drawerTitle }: CloseDrawerProps): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useAtom(DrawerOpenAtom(drawerTitle));
  return (
    <ClickableIcon
      height="30px"
      width="30px"
      borderRadius="6px"
      onClick={() => {
        setDrawerOpen(!drawerOpen);
      }}
    >
      <CloseDrawerIcon height="20px" width="20px" mainColor="#fff" />
    </ClickableIcon>
  );
}
