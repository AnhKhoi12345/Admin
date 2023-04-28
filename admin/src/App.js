import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./page/Team";
import Header from "./components/HeaderSidebar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Admin></Admin>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
