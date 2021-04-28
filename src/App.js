import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Sidebar />

            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
