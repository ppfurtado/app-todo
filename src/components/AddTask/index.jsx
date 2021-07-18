import React from "react";

const AddTask = () => {
  const [inputValue, setInputValue] = React.useState("");

  const hanbleChangeInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    alert("Um nome foi enviado: ");
    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
        status: "Todo",
      }),
    });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Task</span>{" "}
          <input type="text" value={inputValue} onChange={hanbleChangeInput} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default AddTask;
