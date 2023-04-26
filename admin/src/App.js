import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./page/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route>
          <Route path="/" element={<Admin></Admin>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
