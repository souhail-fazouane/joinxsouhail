import { ClickableIcon } from "@/components/ClickableIcon";
import { AnswerIcon } from "@/icons/Answer";
import { Message } from "@/utils/socket/types";

type MessageElementProps = {
  message: Message;
};

export function MessageElement({ message }: MessageElementProps): JSX.Element {
  return (
    <div className="flex w-full px-[10px] relative ">
      <div className=" group px-[10px] rounded-[6px] py-[8px] hover:bg-hoverElement w-full relative">
        <p className="text-colorMessage text-base  ">
          <span
            className="font-bold hover:bg-hoverElement py-1 rounded-[6px]"
            style={{ color: message.user.color }}
          >
            {message.user.username}
          </span>
          : {message.text}
        </p>
        <div className="group-hover:flex hidden  absolute right-[0px] -top-[10px] bg-hintedGrey2 hover:flex rounded-[6px] border border-black shadow-indigo-500/40">
          <ClickableIcon height="30px" width="30px" borderRadius="6px">
            <AnswerIcon height="20px" width="20px" mainColor="#fff" />
          </ClickableIcon>
        </div>
      </div>
    </div>
  );
}
