import React from "react";
// import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onClickComplete(index)}
              >
                完了
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onClickDelete(index)}
              >
                削除
              </Button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
