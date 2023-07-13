import { DrawerOpenAtom } from "@/components/Drawer/store";
import { DownArrowIcon } from "@/icons/DownArrow";
import { PauseIcon } from "@/icons/Pause";
import { Message } from "@/utils/socket/types";
import { useSocket } from "@/utils/socket/useSocket";
import { animated, useSpring } from "@react-spring/web";
import { useAtomValue } from "jotai";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MessageElement } from "./MessageElement";

type MessageContainerProps = {
  container: RefObject<HTMLDivElement>;
  listMessage: Message[];
  stopScroll: boolean;
  scrollToLast: () => void;
};

export function MessageContainer({
  container,
  listMessage,
  stopScroll,
  scrollToLast,
}: MessageContainerProps): JSX.Element {
  return (
    <div className="flex flex-col overflow-hidden h-full relative">
      <div
        ref={container}
        className="flex flex-col overflow-auto h-full relative"
      >
        {listMessage.map((message, index) => (
          <MessageElement key={index} message={message} />
        ))}
      </div>
      <div
        className="flex absolute  bottom-[10px]  left-[24px] right-[24px] "
        style={{
          display: stopScroll ? "flex" : "none",
          opacity: stopScroll ? 1 : 0,
        }}
      >
        <button
          className="group backdrop-blur-sm bg-opacity9 rounded-[6px] flex w-full py-[5px] px-[10px] text-sm items-center gap-1"
          onClick={() => {
            scrollToLast();
          }}
        >
          <div className="group-hover:flex hidden h-[20px] w-[20px] justify-center items-center">
            <DownArrowIcon mainColor="#fff" height="12px" width="12px" />
          </div>
          <div className="group-hover:hidden flex h-[20px] w-[20px] justify-center items-center">
            <PauseIcon mainColor="#fff" height="16px" width="16px" />
          </div>

          <p className="group-hover:flex hidden w-full text-center text-white font-semibold  justify-center">
            Voir les nouveaux messages
          </p>
          <p className="group-hover:hidden flex w-full text-center text-white font-semibold items-center">
            Chat mis en pause à cause du défilement
          </p>
        </button>
      </div>
    </div>
  );
}
