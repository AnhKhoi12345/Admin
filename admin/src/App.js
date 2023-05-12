import { Route, Routes } from "react-router-dom";
import "./App.css";
import Team from "./page/Team";
import Header from "./components/HeaderSidebar";
import TeamProfile from "./page/TeamProfile";
import { useState } from "react";

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
            path="/team/:id"
            // component={teamList}
            element={<TeamProfile checked={checked} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
