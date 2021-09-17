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
  "adapter",
  "decorator",
  "facade",
  "factory",
  "iterator",
  "mediator",
  "observer",
  "proxy",
  "singleton",
];

function Container() {
  const { pathname } = useLocation();
  const match = pathname.split("/")[1];
  return (
    <>
      <ul className="menu">
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://slides.com/vmenonbb/design-patterns-at-beachbody/"
              >
                <img
                  alt="Watch the patterns grow"
                  title="You will like ze patterns"
                  src="https://media2.giphy.com/media/3NeSk2IVEd2FYUQEcM/giphy.gif"
                />
              </a>
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
          <h1>
            <Link to="/">JavaScript Design Patterns</Link>
          </h1>
          <Container />
          <footer>
            <p>
              Demoed at the Beachbody Let's Learn on Sept 17, 2021. Slides
              available{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://slides.com/vmenonbb/design-patterns-at-beachbody/"
              >
                here
              </a>
              .
            </p>
            <p>Want even more design patterns? Check out below</p>
            <p>
              Sources, Inspiration:{" "}
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
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
