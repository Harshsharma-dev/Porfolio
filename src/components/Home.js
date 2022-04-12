import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Logo from "./Logo";

function Home() {
  return (
    <div className="home">
      
      <div className="home__intro">
        <h1>Hey,</h1>
        <h1>I'm Harsh Sharma</h1>
        <h2>
          <span>
            <Typewriter
              options={{
                strings: [
                  "A Programmer",
                  "A Freelancer",
                  "A Front-end Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Home;
{
  /* <a href="https://www.freepik.com/vectors/backend">Backend vector created by storyset - www.freepik.com</a> */
}
