import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img
        src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
        alt="logo"
        className="img-fluid App-logo"
      /></header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Madison Robles</footer>
    </div>
  );
}

export default App;
