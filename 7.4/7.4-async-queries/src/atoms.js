import { atom, selector } from "recoil";
import axios from "axios";

export const todo = atom({
  key: "todo",
  default: selector({
    key: "seletor",
    get: async () => {
      //Blank screen untill data comes.
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      return res.data;
    },
  }),
});
