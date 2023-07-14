import NextImg, { ImageProps as NextImageProps } from "next/image";

type GiftElementProps = {
  score: number;
  username: string;
  rank: number;
};

export function GiftElement({
  score,
  username,
  rank,
}: GiftElementProps): JSX.Element {
  const imageRank1 = {
    url: "https://static.twitchcdn.net/assets/GiftBadge-Gold_72-6e5e65687a6ca6959e08.png",
    altText: "gift badge rank1",
  };
  const imageRank2 = {
    url: "https://static.twitchcdn.net/assets/GiftBadge-Silver_36-bb7c268e0452a2cdcc8d.png",
    altText: "gift badge rank2",
  };
  const imageRank3 = {
    url: "https://static.twitchcdn.net/assets/GiftBadge-Bronze_36-fd0ee2ef5196b3414a2f.png",
    altText: "gift badge rank3",
  };
  const fill = "cover";

  if (rank === 1) {
    return (
      <div className="row-span-2 flex  gap-1 justify-center items-center">
        <div className="relative h-[30px] w-[30px]">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <NextImg
              src={imageRank1.url}
              alt={imageRank1.altText ?? ""}
              fill={!!fill}
              className={["object-cover"].filter(Boolean).join(" ")}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-hintedGrey11 text-base font-bold">{username}</p>
          <div className="flex gap-1 items-center">
            <div className="relative h-[13px] w-[13px]">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <NextImg
                  src={
                    "https://static-cdn.jtvnw.net/badges/v1/8343ada7-3451-434e-91c4-e82bdcf54460/2"
                  }
                  alt={imageRank1.altText ?? ""}
                  fill={!!fill}
                  className={["object-cover"].filter(Boolean).join(" ")}
                />
              </div>
            </div>
            <p className="text-base text-hintedGrey8 font-semibold">{score}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-1 items-center">
      <div className="relative h-[18px] w-[18px]">
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <NextImg
            src={rank === 2 ? imageRank2.url : imageRank3.url}
            alt={rank === 2 ? imageRank2.altText : imageRank3.altText}
            fill={!!fill}
            className={["object-cover"].filter(Boolean).join(" ")}
          />
        </div>
      </div>
      <p className="text-hintedGrey11 text-base font-bold">{username}</p>
      <div className="flex gap-1 items-center ml-auto">
        <div className="relative h-[13px] w-[13px]">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <NextImg
              src={
                "https://static-cdn.jtvnw.net/badges/v1/c4a29737-e8a5-4420-917a-314a447f083e/2"
              }
              alt={rank === 2 ? imageRank2.altText : imageRank3.altText}
              fill={!!fill}
              className={["object-cover"].filter(Boolean).join(" ")}
            />
          </div>
        </div>
        <p className="text-base text-hintedGrey8 font-semibold ">{score}</p>
      </div>
    </div>
  );
}
