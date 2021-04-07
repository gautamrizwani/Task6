import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodosList from "./components/todos-list.component";
import DeleteTodo from "./components/delete-todo.component";
import CreateTodo from "./components/create-todo.component";
import FindTodo from "./components/find-todo.component";

function App() {
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
              <li className="navbar-item">
                <Link to="/delete" className="nav-link">Delete Todo</Link>
              </li>
              <li className="navbar-item">
                <Link to="/find" className="nav-link">Find Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/delete" component={DeleteTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/find" component={FindTodo} />
      </div>
    </Router>
  );
}

export default App;
