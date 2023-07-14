import { ClickableIcon } from "@/components/ClickableIcon";
import NextImg, { ImageProps as NextImageProps } from "next/image";

type ScoreProps = {
  score: number;
};

export function Score({ score }: ScoreProps): JSX.Element {
  return (
    <button className="flex gap-2 items-center">
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
      <p className="text-base text-hintedGrey11 font-semibold">{score}</p>
    </button>
  );
}
