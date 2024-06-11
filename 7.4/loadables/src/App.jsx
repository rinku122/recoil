import "./App.css";
import {
  RecoilRoot,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // const todo = useRecoilValueLoadable(todosAtomFamily(id));

  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        Title : {todo.contents.title}
        <br />
        Id : {todo.contents.id}
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return (
      <>
        <p>Error from backend</p>
      </>
    );
  }
}

export default App;
