import { Button } from "@/components/Button";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { GiftHeader } from "./Gift/GiftHeader";
import { MessageContainer } from "../Message/MessageContainer";
import NextImg, { ImageProps as NextImageProps } from "next/image";
import { SmileIcon } from "@/icons/Smile";
import { useSocket } from "@/utils/socket/useSocket";
import { Score } from "./Score";
import { ClickableIcon } from "@/components/ClickableIcon";
import { InputMessage } from "../Input/InputMessage";

type ChatLayerProps = {};

export function ChatLayer({}: ChatLayerProps): JSX.Element {
  const {
    container,
    listMessage,
    stopScroll,
    scrollToLast,
    sendMessage,
    handleChangeMessage,
    message,
  } = useSocket();

  return (
    <div className="min-w-[340px] flex flex-col h-full bg-hintedGrey2 border-x border-x-[rgba(83,83,95,.48)] relative ">
      <ChatHeader />
      <GiftHeader />
      <div
        className="flex flex-col  relative  w-full  overflow-hidden "
        style={{
          height: "calc( 100% - 215px )",
          maxHeight: "calc(100% - 215px )",
          minHeight: "calc(100% - 215px )",
        }}
      >
        <MessageContainer
          container={container}
          listMessage={listMessage}
          stopScroll={stopScroll}
          scrollToLast={scrollToLast}
        />
      </div>
      <div className="flex flex-col h-full flex-grow w-full px-[10px] ">
        <div className=" flex items-center  border border-hintedGrey8 rounded-[6px] w-full pl-[10px] pr-[4px] py-[4px] h-fit">
          <InputMessage
            message={message}
            handleChangeMessage={handleChangeMessage}
          />
          <ClickableIcon height="30px" width="30px" borderRadius="6px">
            <SmileIcon height="20px" width="20px" mainColor="#fff" />
          </ClickableIcon>
        </div>
        <div className="flex justify-between items-center flex-grow">
          <Score score={120} />
          <Button
            onClick={() => {
              if (message !== "") {
                sendMessage(message);
              }
            }}
          >
            <p className="text-base">Chat</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
