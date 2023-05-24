import { Route, Routes } from "react-router-dom";
import "./App.css";
import Team from "./page/Team";
import Header from "./components/HeaderSidebar";
import TeamProfile from "./page/TeamProfile";
import { useState } from "react";
import Barchart from "./page/Dashboard/Barchart";
import Linechart from "./page/Dashboard/Linechart";
import Piechart from "./page/Dashboard/Piechart";
import Schedule from "./page/Schedule";
import Task from "./page/Task";
import AddTeam from "./page/AddTeam";

function App() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header checked={checked} setChecked={(e) => setChecked(e)} />
      <Routes>
        <Route>
          <Route path="/" element={<Team checked={checked} />}></Route>
          <Route
            path="/datatables/team/:id"
            // component={teamList}
            element={<TeamProfile checked={checked} />}
          />
        </Route>
        <Route path="/dashboard/barchart" element={<Barchart />}></Route>
        <Route path="/dashboard/linechart" element={<Linechart />}></Route>
        <Route path="/dashboard/piechart" element={<Piechart />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/tasks" element={<Task />}></Route>
        <Route path="/addteam" element={<AddTeam />}></Route>
      </Routes>
    </div>
  );
}

export default App;
