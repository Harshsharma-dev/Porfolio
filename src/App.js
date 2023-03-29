import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import About from "./components/About";
import Projectpage from "./components/Projectpage";
import Contact from "./components/Contact";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function App() {
  // const navigate = useNavigate();

  return (
    // <ReactScrollWheelHandler
    //   upHandler={(e) => navigate("/about-me")}
    //   downHandler={(e) => console.log("scroll down")}
    // >
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={[
              <Background />,
              <Header />,
              <Logo />,
              <Home />,
              <Footer />,
            ]}
          ></Route>
          <Route
            exact
            path="/about-me"
            element={[
              <Background />,
              <Logo />,
              <Header />,
              <About />,
              <Footer />,
            ]}
          ></Route>
          <Route
            exact
            path="/projects"
            element={[
              <Background />,
              <Logo />,
              <Header />,
              <Projectpage />,
              <Footer />,
            ]}
          ></Route>
          <Route
            exact
            path="/contactme"
            element={[
              <Background />,
              <Logo />,
              <Header />,
              <Contact />,
              <Footer />,
            ]}
          ></Route>
        </Routes>
      </div>
    </Router>
    // </ReactScrollWheelHandler>
  );
}

export default App;
