import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
