import { ProfilIcon } from "@/icons/Profil";
import { Button } from "../Button";
import { ClickableIcon } from "../ClickableIcon";

export function Header(): JSX.Element {
  return (
    <div className="flex w-full min-h-[50px] bg-hintedGrey2 items-center border-b-2 border-b-black justify-end px-[10px] gap-[10px]">
      <Button>
        <p className="text-base">S&apos;inscrire</p>
      </Button>
      <ClickableIcon height="30px" width="30px" borderRadius="6px">
        <ProfilIcon height="20px" width="20px" mainColor="#fff" />
      </ClickableIcon>
    </div>
  );
}
