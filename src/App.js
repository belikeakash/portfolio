import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from "./Head";
import Header from "./Header";
import Mid from "./Mid";
import Project from "./Projects";
import Contact from "./Contact";
import Me2 from "./Me2";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/contact">
            <Header />
            <Contact />
          </Route>
                <Route path="/about">
            <Header />
            <Me2 />
          </Route>
          <Route path="/projects">
            <Header />
            <Project />
          </Route>
          <Route path="/">
            <Header />
            <Head />
            <Mid />
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


//service_ez5799d