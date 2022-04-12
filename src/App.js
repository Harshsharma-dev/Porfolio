import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
