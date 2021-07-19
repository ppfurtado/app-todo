import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconEdit } from "../../assets/edit.svg";
import { ReactComponent as IconDelete } from "../../assets/delete.svg";

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

  const handleDelete = async (id) => {
    fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
              <td>
                <Link to={`/edit-task/${task.id}`}>
                  <IconEdit width="20px" />
                </Link>
              </td>
              <td>
                <IconDelete
                  width="20px"
                  height="30px"
                  onClick={() => handleDelete(task.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
