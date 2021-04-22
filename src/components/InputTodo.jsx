import React from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <form
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      >
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </form>
      <Button variant="contained" disabled={disabled} onClick={onClick}>
        追加
      </Button>
    </div>
  );
};
