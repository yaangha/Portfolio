import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
