import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          {incompleteTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div>
          {completeTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </ul>
            );
          })}
        </div>
      </div>
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
