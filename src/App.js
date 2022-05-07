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
      <div className="main-content">
        <div className="main-left"></div>
        <div className="main-right">
          <h3>Diskusi 5 Teratas</h3>
          <ul className="trending">
            <li><div className="num-box">1</div>Cara mengetahui akun Facebook di-hack melalui aplikasi</li>
            <li><div className="num-box">1</div>Batas aman overclock PC rakitan</li>
            <li><div className="num-box">1</div>Cara mengetahui akun Facebook di-hack melalui aplikasi</li>
            <li><div className="num-box">1</div>Cara mengetahui akun Facebook di-hack melalui aplikasi</li>
            <li><div className="num-box">1</div>Cara mengetahui akun Facebook di-hack melalui aplikasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
