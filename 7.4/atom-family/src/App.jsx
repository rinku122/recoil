import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      {/* Creates dynamic atoms for each todo, usefull suppose if one todo chnage, then at that time only one Todo component 
      rerenders instaed of whole todo list */}
      <Todo id={1} />
      <Todo id={2} />
      {/* //Will not create atoms agian and again, they will be shown from cahing */}
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
