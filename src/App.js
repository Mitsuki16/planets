import "./App.css";
import { Route, Routes } from "react-router";
import PlanetDetails from "./PlanetDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:planetName" Component={PlanetDetails} />
      </Routes>
      
    </div>
  );
}

export default App;
