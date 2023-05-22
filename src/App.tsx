import "./App.scss";
import { ArrowIcon } from "./components/arrow-icon";

function App() {
  return (
    <main>
      <header className="header-container">
        <img src="./logo-image.svg" />
        <nav className="menu-options">
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className="btn-face-white">
            Contact us
            <ArrowIcon />
          </div>
          <div className="btn-face-purple">
            Contact us
            <ArrowIcon />
          </div>
        </button>
      </header>
    </main>
  );
}

export default App;
