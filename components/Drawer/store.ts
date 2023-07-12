import { atom, PrimitiveAtom } from "jotai";
import { atomFamily } from "jotai/utils";

export const DrawerOpenAtom = atomFamily<string, PrimitiveAtom<boolean>>(() =>
  atom<boolean>(true)
);
