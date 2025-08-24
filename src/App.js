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
      <footer className="App-footer">Coded by Madison Robles</footer>
    </div>
  );
}

export default App;
