import "./App.css";
import { Route, Routes } from "react-router";
import { Navigate  } from 'react-router-dom';
import PlanetDetails from "./PlanetDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:planetName" Component={PlanetDetails} />
        <Route path="/" element={<Navigate to="/mercury" />} />
      </Routes>
    </div>
  );
}

export default App;
