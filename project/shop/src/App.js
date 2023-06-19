import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Members from "./component/Members";
/* import Profile from "./component/Profile"; */
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <Link to="members">members</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="/members*" element={<Members />} />
        {/*  <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
