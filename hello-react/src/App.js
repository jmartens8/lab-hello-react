import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <>
      <section className="top-section">
        <div className="nav-bar">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="ironhack-logo"/>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu" />
        </div>
        <div className="text-box">
          <h1>Say hello to <br /> ReactJS</h1>
          <h4>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</h4>
        </div>
        <button>Awsome!</button>  
      </section>

      <section className="buttom-section">
        <div className="container">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className="container">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div className="container">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        
        <div className="container">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="" />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </section>
    </>
  );
}

export default App;
