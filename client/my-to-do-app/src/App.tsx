import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Tasks from "./components/tasks/Tasks";
import Completed from "./components/tasks/Completed";
import Upcoming from "./components/tasks/Upcoming";
import CreateTask from "./components/tasks/create-task/CreateTask";

function App() {
  return (
    <>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/tasks/upcoming" element={<Upcoming/>}></Route>
            <Route path="/tasks/completed" element={<Completed/>}></Route>
            <Route path="/tasks/create" element={<CreateTask/>}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
