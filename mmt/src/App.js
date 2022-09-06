import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from "react-router-dom";
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>Soni</h1>
    </div>
  );
}

export default App;
