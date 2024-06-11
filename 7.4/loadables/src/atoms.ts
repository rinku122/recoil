import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      await new Promise((r) => setTimeout(r, 2000));
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      return res.data;
    },
  }),
});
