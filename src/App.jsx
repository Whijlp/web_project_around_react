import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <footer className="footer">
          <p className="footer__text">&#174; whiter landiez</p>
        </footer>
      </div>
    </>
  );
}

export default App;
