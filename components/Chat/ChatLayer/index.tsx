import { Button } from "@/components/Button";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { GiftHeader } from "./Gift/GiftHeader";
import { MessageContainer } from "../Message/MessageContainer";
import NextImg, { ImageProps as NextImageProps } from "next/image";
import { SmileIcon } from "@/icons/Smile";
import { useSocket } from "@/utils/socket/useSocket";

type ChatLayerProps = {};

export function ChatLayer({}: ChatLayerProps): JSX.Element {
  const {
    socket,
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
      <div
        className="flex flex-col h-full flex-grow w-full px-[10px] "
        style={{ minHeight: "9px" }}
      >
        <div className=" flex items-center  border border-hintedGrey8 rounded-[6px] w-full p-[10px] h-fit">
          <textarea
            id="message"
            name="message"
            placeholder="Envoyer un message"
            className="bg-transparent  whitespace-pre-wrap resize-none text-base w-full  text-hintedGrey11 outline-0"
            onChange={(e) => {
              handleChangeMessage(e.target.value);
            }}
            value={message}
            rows={1}
          />
          <div className="min-h-[20px] min-w-[20px] flex  rounded-full justify-center items-center">
            <SmileIcon height="20px" width="20px" mainColor="#fff" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-grow">
          <div className="flex gap-2 items-center">
            <div className="relative h-[20px] w-[20px]">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <NextImg
                  src="https://static-cdn.jtvnw.net/channel-points-icons/622498423/cb61852f-1d4b-40bb-9eb7-05961e42aded/icon-2.png"
                  alt="coin"
                  fill={true}
                  className={["object-cover"].filter(Boolean).join(" ")}
                />
              </div>
            </div>
            <p className="text-base text-hintedGrey11 font-semibold">120</p>
          </div>
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
