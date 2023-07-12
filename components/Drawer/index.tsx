import { animated, useSpring } from "@react-spring/web";
import { useAtomValue } from "jotai";
import { DrawerOpenAtom } from "./store";

type DrawerProps = {
  drawerTitle: string;
  children?: React.ReactNode;
};

export function Drawer({ drawerTitle, children }: DrawerProps): JSX.Element {
  const drawerOpen = useAtomValue(DrawerOpenAtom(drawerTitle));

  const springSlide = useSpring({
    width: drawerOpen ? "340px" : "0px",
    minWidth: drawerOpen ? "340px" : "0px",
  });

  return (
    <animated.div
      className="h-full flex overflow-hidden flex-col bg-hintedGrey2"
      style={springSlide}
    >
      {children}
    </animated.div>
  );
}
