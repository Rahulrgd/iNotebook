import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import
import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <NoteState>
      <Router>
        {/* <div className="App"> */}
        <MyNavbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>} />
            {/* <Route path="/Footer_Components/Policy" element={<Policy />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
        </div>
        {/* </div> */}
      </Router>
    </NoteState>
  );
}

export default App;
