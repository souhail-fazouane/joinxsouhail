import { ClickableIcon } from "@/components/ClickableIcon";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import { GiftElement } from "./GiftElement";

export function GiftHeader(): JSX.Element {
  return (
    <div className="flex w-full items-center border-b  border-b-[rgba(83,83,95,.48)]">
      <ClickableIcon height="20px" width="30px">
        <ArrowLeft mainColor="#dadada" height="20px" width="20px" />
      </ClickableIcon>
      <div className="flex flex-col  w-full justify-center items-center hover:bg-hoverElement pb-1">
        <div className="grid grid-cols-[100px_minmax(100px,_1fr)] grid-rows-2 gap-y-2 gap-x-2 m-auto py-2">
          <GiftElement username="Raphael" rank={1} score={148} />
          <GiftElement username="Raphael" rank={2} score={148} />
          <GiftElement username="KELEKDiehd" rank={3} score={148} />
        </div>
        <div className="h-[5px] min-w-[40px] rounded-[10px] bg-hintedGrey4" />
      </div>
      <ClickableIcon height="20px" width="30px">
        <ArrowRight mainColor="#dadada" height="20px" width="20px" />
      </ClickableIcon>
    </div>
  );
}
