import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Frompage from "./Frompage";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DoctorsPage from "./DoctorsPage";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <nav>
          <ul>
            <li id="lbl"> Remote Doctor Consultation</li>

            <li style={{ paddingRight: "13em" }}>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li style={{ paddingRight: "13em" }}>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/doctors" exact component={DoctorsPage} />
          <Route path="/form" exact component={Frompage} />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
