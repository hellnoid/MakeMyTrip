import './App.css';
import NavBar from './Components/NavBar';
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { Home } from './Components/Home/Home';
=======
import { Offers } from './Components/Offers';
import {Location} from './Components/Location';
>>>>>>> 61e8cdff07b91f6fa3bd7246d2e1419cfe71e5cd

function App() {
  return (
    <div className="App">
      <NavBar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>Soni</h1>
=======
      <Offers/>
      <Location />
      {/* <h1>Soni</h1> */}
>>>>>>> 61e8cdff07b91f6fa3bd7246d2e1419cfe71e5cd
    </div>
  );
}

export default App;
