import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="img-fluid App-logo" />
      </header>
      <main className="App-main">
        <h1>Dictionary</h1>
        <Dictionary />
      </main>
      <footer>
        <p className="footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/madison-robles-40155b235/"
            target="blank"
            rel="noreferrer noopener"
          >
            Madison Robles
          </a>
          . Open-sourced on{" "}
          <a
            href="https://github.com/mrsmrobles/dictionary-project"
            target="blank"
            rel="noreferrer noopener"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="app.netlify.com" target="blank" rel="noreferrer noopener">
            Netlify
          </a>
          .
        </p>
      </footer>{" "}
    </div>
  );
}

export default App;
