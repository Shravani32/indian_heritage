import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Domain from './Components/Domain';
import About from './Components/About';

function App() {
  return (
    <div className="App">

        <Navbar/>

        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/domain" element={<Domain/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
