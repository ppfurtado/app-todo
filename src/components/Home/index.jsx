import { Link } from "react-router-dom";
import Button from "../helpe/Button";
import Table from "../Table";

import "./style.css";

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>TODO List App</h1>
      </header>
      <main>
        <div className="Button">
          <Link to="/add-task">
            <Button className="Link">Add Task</Button>
          </Link>
        </div>
        <Table />
      </main>
    </div>
  );
}

export default Home;
