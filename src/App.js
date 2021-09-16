import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";
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
  "observer",
];

function Container() {
  const { pathname } = useLocation();
  const match = pathname.split("/")[1];
  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/">home</Link>
        </li>
        {menu.map((item) => (
          <li key={item} className={`${item === match ? "active" : ""}`}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path="/">
          <div>
            <h3>^Select a choice from menu</h3>
            <p>
              <img
                alt="Watch the patterns"
                title="You will like ze patterns"
                src="https://media2.giphy.com/media/3NeSk2IVEd2FYUQEcM/giphy.gif"
              />
            </p>
          </div>
        </Route>
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
          <footer>
            Sources:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fbeline/design-patterns-JS"
            >
              fbeline
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/davemcg3/design_patterns"
            >
              davemcg3
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.oreilly.com/library/view/javascript-patterns/9781449399115/"
            >
              Stoyan Stefanov
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/vijayxtreme"
            >
              vmenon
            </a>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
