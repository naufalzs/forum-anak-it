import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <h1>Forum Anak IT</h1>
            <div className="search-bar">
              Search
              <div className="icon-search"></div>
            </div>
          </div>
          <ul className="navbar-right">
            <li>Categories</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default App;
