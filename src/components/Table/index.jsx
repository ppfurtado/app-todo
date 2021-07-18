import React from "react";

import "./style.css";

const Table = () => {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    async function getTasks() {
      const data = await fetch("http://localhost:4000/tasks");
      const json = await data.json();
      console.log(json);
      setTasks(json);
    }
    getTasks();
  }, []);

  if (tasks === null) return null;
  return (
    <div className="Wrapper">
      <table>
        <thead>
          <tr className="table-header">
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td> {task.id} </td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>Editar</td>
              <td>Remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
