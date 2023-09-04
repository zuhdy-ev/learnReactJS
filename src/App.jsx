import "./App.css";
import Home from "./pages/index";
import Article from "./components/Article";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Ahmad",
  };
  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <Home />
        </GlobalContext.Provider>
      </div>
      {/* <Article name="Ahmad" status="UI/UX Designer" jobdesc={["Design UI", "Design UX", "Meeting with client"]}/>
      <br />
      <hr />
      <br />
      <Article name="Rudi" status="Developer" jobdesc={["Ngoding", "Ngoding", "Ngoding"]}/> */}
    </>
  );
}

export default App;
