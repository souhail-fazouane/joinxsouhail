import { ClickableIcon } from "@/components/ClickableIcon";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";

import { GiftElement } from "./GiftElement";

const mockGift = [
  { username: "Raphael", rank: 1, score: 178 },
  { username: "LilPlay", rank: 2, score: 142 },
  { username: "mibuano", rank: 3, score: 109 },
];

export function GiftHeader(): JSX.Element {
  return (
    <div className="flex w-full items-center border-b  border-b-[rgba(83,83,95,.48)]">
      <ClickableIcon height="20px" width="30px">
        <ArrowLeft mainColor="#dadada" height="20px" width="20px" />
      </ClickableIcon>
      <button className="flex flex-col  w-full justify-center items-center hover:bg-hoverElement pb-1 ">
        <div className="grid grid-cols-[100px_minmax(100px,_1fr)] grid-rows-2 gap-y-2 gap-x-2  py-2">
          {mockGift.map((giftUser) => (
            <GiftElement
              key={giftUser.username}
              username={giftUser.username}
              rank={giftUser.rank}
              score={giftUser.score}
            />
          ))}
        </div>
        <div className="h-[5px] min-w-[40px] rounded-[10px] bg-hintedGrey4" />
      </button>
      <ClickableIcon height="20px" width="30px">
        <ArrowRight mainColor="#dadada" height="20px" width="20px" />
      </ClickableIcon>
    </div>
  );
}
