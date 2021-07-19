import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
