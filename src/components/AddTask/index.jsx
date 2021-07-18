import React from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOption] = React.useState("");

  const navigate = useNavigate();

  const hanbleChangeInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const hanbleStatus = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return alert("Insira a task ");
    }
    alert("Um nome foi enviado: ");
    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
        status: options,
      }),
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Task</span>{" "}
          <input type="text" value={inputValue} onChange={hanbleChangeInput} />
          <select
            name="status"
            id="status"
            onChange={hanbleStatus}
            value={options}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default AddTask;
