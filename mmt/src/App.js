import './App.css';
import NavBar from './Components/NavBar';
import { Offers } from './Components/Offers';
import {Location} from './Components/Location';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Offers/>
      <Location />
      {/* <h1>Soni</h1> */}
    </div>
  );
}

export default App;
