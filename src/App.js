import logo from './assets/images/ironhack-logo.svg';
import menuTop from './assets/images/menu-top.svg';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="Top">
      <img src={logo} className="App-logo" alt="logo" />
          <img src={menuTop} className="menutop" alt="logo" />
        </nav>
      <h1>
          Say Hello to <br/>ReactJS
        </h1>
        <p class="p-intro">
          You will learn how to use <br/>
          the most popular frontend library, <br/>
          and become a super Ninja developer.
        </p>
        <a
          class="button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
      </header>
      <section className="Info">
        <div className="Bullet">
          <img src={icon1} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes ir painless to create interactive UIs.</p>
        </div>
        <div className="Bullet">
          <img src={icon2} alt="logo" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="Bullet">
          <img src={icon3} alt="logo" />
          <h3>Declarative</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="Bullet">
          <img src={icon4} alt="logo" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
