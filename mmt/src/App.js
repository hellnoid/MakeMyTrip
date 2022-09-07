import './App.css';
// import NavBar from './Components/NavBar';
import {Flightfilter} from './Components/FilterComponent/Fightfilter/Fillter';

import { Route, Routes } from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Offers } from './Components/Offers';
import { Location } from './Components/Location';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <NavBar /> */}
      {/* <h1>Soni</h1> */}
      <Flightfilter />
=======
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>Soni</h1>
      <Offers />
      <Location />
>>>>>>> 9b9ed6f3a4a09ce7276b21ac2bef381de9c487b1
    </div>
  );
}

export default App;
