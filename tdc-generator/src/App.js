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
            <select
              id="nbrOfParticipants"
              className="inputText"
              type="text"
              placeholder="# of participants"
            >
              <option key="1" value="2">2</option>
              <option key="2" value="2">4</option>
              <option key="3" value="2">6</option>
              <option key="4" value="2">8</option>
              <option key="5" value="2">10</option>
              <option key="6" value="2">12</option>
              <option key="7" value="2">14</option>
              <option key="8" value="2">16</option>
              <option key="9" value="2">18</option>
              <option key="10" value="2">20</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
