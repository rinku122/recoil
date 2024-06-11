import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    //onlt called twice
    console.log("OOOOOOOOOOOO");
    return TODOS.find((x) => x.id === id);
  },
});
 