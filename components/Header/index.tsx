import { Button } from "../Button";

export function Header(): JSX.Element {
  return (
    <div className="flex w-full min-h-[50px] bg-hintedGrey2 items-center border-b-2 border-b-black">
      <Button>
        <p className="text-base">S&apos;inscrire</p>
      </Button>
    </div>
  );
}
