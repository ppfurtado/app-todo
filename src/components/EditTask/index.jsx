import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  console.log(id);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOption] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    async function getData() {
      const data = await fetch(`http://localhost:4000/tasks/${id}`);
      const { name, status } = await data.json();
      setInputValue(name);
      setOption(status);
      console.log(name, status);
      // inputValue(name);
      // options(status);
    }
    getData();
  }, [id]);

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
    alert("Task editada com sucesso!");
    fetch(`http://localhost:4000/tasks/${id}`, {
      method: "PATCH",
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

export default EditTask;
