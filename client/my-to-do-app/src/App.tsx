import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
