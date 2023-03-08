import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import Landing from "./page/Landing"
import Lowongan from "./page/Lowongan"
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import Apply from "./page/Apply";
import Job from "./page/Job";

function App() {
    return (
          <>
          <Router>
            <Routes>
              <Route exact path="/home" element={<Home />}></Route>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/lowongan" element={<Lowongan />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/apply" element={<Apply />}></Route>
              <Route path="/job" element={<Job />}></Route>
            </Routes>
          </Router>
          </>
    );
}

export default App;
