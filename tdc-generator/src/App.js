import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>TDC Generator</h1>
        <form>
          <div className="form" id="form1">
            <input
              className="inputText"
              type="text"
              placeholder="Theme"
            ></input>
            <input
              className="inputText"
              type="text"
              placeholder="# of participants"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
