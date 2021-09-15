import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Page from "./page";
import "./App.css";
const menu = [
  "singleton",
  "factory",
  "iterator",
  "decorator",
  "proxy",
  "mediator",
  "adapter",
  "gateway",
  "observer",
];

function Container() {
  return (
    <>
      <ul>
        {menu.map((item) => (
          <li key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`/:id`}>
          <Page />
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <h1>JavaScript Design Patterns</h1>
          <Container />
        </div>
      </Router>
    </div>
  );
}

export default App;
