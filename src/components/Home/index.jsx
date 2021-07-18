import { Link } from "react-router-dom";
import Button from "../helpe/Button";
import Table from "../Table";

function Home() {
  return (
    <div className="Home">
      <h1>TODO List App</h1>
      <Link to="/add-task">
        <Button>Add Task</Button>
      </Link>
      <Table />
    </div>
  );
}

export default Home;
