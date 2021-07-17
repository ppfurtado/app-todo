import React from "react";

import "./style.css";

const allTask = [
  {
    id: 1,
    name: "buy meat",
    status: "Todo",
  },
  {
    id: 2,
    name: "Study Javascript",
    status: "Todo",
  },
  {
    id: 3,
    name: "Study Java",
    status: "Todo",
  },
  {
    id: 4,
    name: "Watch Matrix",
    status: "Todo",
  },
];

const Table = () => {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    setTasks(allTask);
  }, []);

  if (tasks === null) return null;
  return (
    <div className="Wrapper">
      <table>
        <tr className="table-header">
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        {tasks.map((task) => (
          <tr>
            <td> {task.id} </td>
            <td>{task.name}</td>
            <td>{task.status}</td>
            <td>Editar</td>
            <td>Remove</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
