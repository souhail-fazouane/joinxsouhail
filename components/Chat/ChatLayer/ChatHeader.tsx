import { ClickableIcon } from "@/components/ClickableIcon";
import { CloseDrawer } from "@/components/Drawer/CloseDrawer";
import { OpenDrawer } from "@/components/Drawer/OpenDrawer";
import { CommunityIcon } from "@/icons/Community";

export function ChatHeader(): JSX.Element {
  return (
    <div className="border-b border-b-[rgba(83,83,95,.48)] flex justify-between text-white px-[10px] min-h-[50px] items-center">
      <CloseDrawer drawerTitle="chat" />
      <p className="text-base font-bold text-hintedGrey11">CHAT DU STREAM</p>
      <ClickableIcon height="30px" width="30px" borderRadius="6px">
        <CommunityIcon height="20px" width="20px" mainColor="#fff" />
      </ClickableIcon>
    </div>
  );
}
