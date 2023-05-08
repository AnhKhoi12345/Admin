import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./page/Team";
import Header from "./components/HeaderSidebar";
import { teamList } from "./database/TeamDatabase";
import TeamProfile from "./page/TeamProfile";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Admin></Admin>}></Route>
          <Route
            path="/team/:id"
            // component={teamList}
            element={<TeamProfile />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
