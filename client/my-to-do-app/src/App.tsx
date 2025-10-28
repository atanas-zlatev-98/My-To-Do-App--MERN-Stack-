import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Tasks from "./components/tasks/Tasks";
import Upcoming from "./components/tasks/upcoming";
import Completed from "./components/tasks/Completed";

function App() {
  return (
    <>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/upcoming" element={<Upcoming/>}></Route>
            <Route path="/completed" element={<Completed/>}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
