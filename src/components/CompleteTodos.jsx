import React from "react";
import Button from "@material-ui/core/Button";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => onClickBack(index)}
              >
                戻す
              </Button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
