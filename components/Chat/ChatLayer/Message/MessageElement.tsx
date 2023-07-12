import { ClickableIcon } from "@/components/ClickableIcon";
import { AnswerIcon } from "@/icons/Answer";
import { Message } from "./MessageContainer";

type MessageElementProps = {
  message: Message;
};

export function MessageElement({ message }: MessageElementProps): JSX.Element {
  return (
    <div className="flex w-full px-[10px] relative ">
      <p className="text-hintedGrey11 text-base px-[10px] rounded-[6px] py-[8px] hover:bg-hoverElement peer ">
        <span
          className="font-bold hover:bg-hoverElement py-1 rounded-[6px]"
          style={{ color: message.user.color }}
        >
          {message.user.username}
        </span>
        : {message.text}
      </p>
      <div className="peer-hover:flex hidden  absolute right-[12px] -top-[12px] bg-hintedGrey2 hover:flex rounded-[6px]">
        <ClickableIcon height="30px" width="30px" borderRadius="6px">
          <AnswerIcon height="20px" width="20px" mainColor="#fff" />
        </ClickableIcon>
      </div>
    </div>
  );
}
