import { Button } from "@/components/Button";
import { ChatHeader } from "./ChatHeader";
import { GiftHeader } from "./Gift/GiftHeader";
import { MessageContainer } from "./Message/MessageContainer";

type ChatLayerProps = {};

export function ChatLayer({}: ChatLayerProps): JSX.Element {
  return (
    <div className="min-w-[340px] flex flex-col h-full bg-hintedGrey2 border-x border-x-[rgba(83,83,95,.48)] relative ">
      <ChatHeader />
      <GiftHeader />
      <div
        className="flex flex-col  relative  w-full  overflow-hidden "
        style={{
          height: "calc( 100% - 250px )",
          maxHeight: "calc(100% - 250px )",
          minHeight: "calc(100% - 250px )",
        }}
      >
        <MessageContainer />
      </div>
      <div
        className="flex flex-col h-full flex-grow w-full px-[10px] pb-[10px]"
        style={{ minHeight: "110px" }}
      >
        <div className=" flex items-center  border border-white rounded-[6px] w-full p-[10px] h-fit">
          <textarea
            id="message"
            name="message"
            placeholder="Envoyer un message"
            className="bg-transparent resize-none text-base w-full h-fit text-hintedGrey11 outline-0 items-center"
            onChange={() => {}}
          />
          <div className="min-h-[30px] min-w-[30px] flex bg-white rounded-full" />
        </div>
        <div className="flex justify-between">
          <Button>
            <p className="text-base">Chat</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
