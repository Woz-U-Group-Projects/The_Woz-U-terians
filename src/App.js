import { Outlet, Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="inventory">Inventory</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Input">Input</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="product">Product</a>
            </li>


          </ul>

        </div>
      </nav>
      <h1>Inventory Tracker Project</h1>

      <Outlet />

    </div>

  );
}
export default App;