import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import Landing from "./page/Landing"
import Lowongan from "./page/Lowongan"

function App() {
    return (
          <>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/lowongan" element={<Lowongan />}></Route>
            </Routes>
          </Router>
          </>
    );
}

export default App;
