import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { todo } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [todoData, setTodo] = useRecoilState(todo);

  console.log(todoData);

  return (
    <>
      <p>Id {todoData.id}</p>
      <p>Title : {todoData.title}</p>
      <p>userId ({todoData.userId})</p>
      <p>Status ({todoData.completed})</p>
      <button
        onClick={() =>
          setTodo((prevTodo) => {
            return {
              ...prevTodo,
              title: "Hello World",
            };
          })
        }
      >
        SetTodo
      </button>
    </>
  );
}

export default App;
