import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { DateTime } from "./components/DateTime";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <DateTime />
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは５個までです。消化してください。
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

// import ColorfulMessage from "./components/ColorfulMessage";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [faceShowFlag, setFaceShowFlag] = useState(false);

//   const onClickCountUp = () => {
//     setNum(num + 1);
//   };

//   const onClickShowFlag = () => {
//     setFaceShowFlag(!faceShowFlag);
//   }
//   useEffect(() => {
//     if (num > 0) {
//       if (num % 3 === 0) {
//        faceShowFlag || setFaceShowFlag(true);
//       } else {
//        faceShowFlag && setFaceShowFlag(false);
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [num]);

//   return (
//     <>
//       <h1 style={{ color: "red" }}>hello!</h1>
//       <ColorfulMessage color="blue">初めまして！</ColorfulMessage>
//       <ColorfulMessage color="pink">こんにちは</ColorfulMessage>
//       <button onClick={onClickCountUp}>count up!</button>
//       <br/>
//       <button onClick={onClickShowFlag}>on/off</button>
//       <p>{num}</p>
//       {faceShowFlag && <p>コメントオンオフ</p>}
//     </>
//   );
// };

// export default App;
