import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import
import MyNavbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import AlertComp from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <NoteState>
    <Router>
    {/* <div className="App"> */}
      <MyNavbar />
      <AlertComp message="This is amazing react course"/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Footer_Components/Policy" element={<Policy />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    {/* </div> */}
  </Router>
  </NoteState>
  );
}

export default App;
