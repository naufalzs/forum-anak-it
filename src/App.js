import { useState } from "react";
import "./styles/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import comments from "./json/comments.json";
import trendings from "./json/trendings.json";

function App() {
  // const [modal, setModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  let dateFormat = (date) => format(new Date(date), "dd MMMM yyyy hh:mm");

  return (
    <div
      className={`container ${
        (modalLogin || modalRegister) && "disable-scroll"
      }`}
    >
      {(modalLogin || modalRegister) && (
        <div className="popup-container">
          {modalLogin && (
            <div className="form-card">
              <h2>Login</h2>
              <div className="form-container">
                <div>
                  <label className="form-label" htmlFor="login-email">
                    Email
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="text"
                    className="custom-input form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="login-password">
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    className="custom-input form-input"
                  />
                </div>
                <div>
                  <button type="button" className="btn btn-submit">
                    Login
                  </button>
                </div>
              </div>
              <div
                className="close-button"
                onClick={() => setModalLogin(false)}
              >
                <FontAwesomeIcon icon={faXmark} className="icon-close" />
              </div>
            </div>
          )}
          {modalRegister && (
            <div className="form-card">
              <h2>Register</h2>
              <div className="form-container">
                <div>
                  <label className="form-label" htmlFor="register-name">
                    Nama
                  </label>
                  <input
                    id="register-name"
                    name="name"
                    type="text"
                    className="custom-input form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="register-email">
                    Email
                  </label>
                  <input
                    id="register-email"
                    name="email"
                    type="text"
                    className="custom-input form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="register-password">
                    Password
                  </label>
                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    className="custom-input form-input"
                  />
                </div>
                <div>
                  <button type="button" className="btn btn-submit">
                    Create account
                  </button>
                </div>
              </div>
              <div
                className="close-button"
                onClick={() => setModalRegister(false)}
              >
                <FontAwesomeIcon icon={faXmark} className="icon-close" />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <h1>Forum Anak IT</h1>
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="search-input"
              />
              {/* Search */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-search"
              />
            </div>
          </div>
          <ul className="navbar-right">
            <li>
              Categories
              <ul className="category-dropdown">
                <li>Linux</li>
                <li>Windows</li>
                <li>MAC OS</li>
                <li>Android</li>
                <li>iOS</li>
              </ul>
            </li>
            <li onClick={() => setModalLogin(true)}>Login</li>
            <li onClick={() => setModalRegister(true)}>Register</li>
          </ul>
          <div
            className="navbar-mobile-menu"
            onClick={() => setNavbarMenu(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          {navbarMenu && (
            <ul className="navbar-mobile">
              <div className="navbar-mobile-header">
                <div onClick={()=>setNavbarMenu(false)} className="navbar-mobile-close-button">
                  <FontAwesomeIcon icon={faXmark} className="icon-close" />
                </div>
                <div className="search-bar">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="search-input"
                  />
                  {/* Search */}
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="icon-search"
                  />
                </div>
              </div>
              <li>Categories</li>
              <ul className="category-dropdown-mobile">
                <li>Linux</li>
                <li>Windows</li>
                <li>MAC OS</li>
                <li>Android</li>
                <li>iOS</li>
              </ul>
              <li onClick={() => setModalLogin(true)}>Login</li>
              <li onClick={() => setModalRegister(true)}>Register</li>
            </ul>
          )}
        </div>
      </div>
      <div className="main-content">
        <div className="main-left">
          <div className="section-topic">
            <h1>
              Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi
              webcam
            </h1>
            <p>
              Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada
              yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah
              ada kemungkinan laptop saya di-hack karena kasus terjadi tiap
              terkoneksi di internet.
            </p>
          </div>
          <div className="section-comment">
            <h2 className="title-1">Komentar</h2>
            {/* <div className="pic"></div> */}
            {comments?.map((item) => (
              <div key={item?.id} className="comment-container">
                <img src={item?.avatar} alt="" className="pic" />
                <div className="comment-content">
                  <h4>{item?.author}</h4>
                  <div className="comment-date">{dateFormat(item?.date)}</div>
                  <p>{item?.message}</p>
                  <div className="comment-vote-container">
                    <p>{item?.point} point</p>
                    <div className="vote-square">
                      <FontAwesomeIcon icon={faArrowUp} className="vote-icon" />
                    </div>
                    <div className="vote-square">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="vote-icon"
                      />
                    </div>
                  </div>
                  {item?.replies?.map((reply) => (
                    <div key={reply?.id} className="reply-container">
                      <img src={reply?.avatar} alt="" className="pic-2" />
                      <div className="comment-content">
                        <h4>{reply?.author}</h4>
                        <div className="comment-date">
                          {dateFormat(reply?.date)}
                        </div>
                        <p>{reply?.message}</p>
                        <div className="comment-vote-container">
                          <p>{reply?.point} point</p>
                          <div className="vote-square">
                            <FontAwesomeIcon
                              icon={faArrowUp}
                              className="vote-icon"
                            />
                          </div>
                          <div className="vote-square">
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="vote-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="section-comment-input">
            <h3 className="title-2">Tambahkan komentar</h3>
            <div className="comment-input-container">
              <input
                name="name"
                placeholder="Nama"
                type="text"
                className="custom-input ip-1"
              />
              <input
                name="email"
                placeholder="Email"
                type="text"
                className="custom-input ip-2"
              />
              <textarea
                name="comment"
                placeholder="Komentar anda"
                className="custom-input ip-3"
                rows="3"
              ></textarea>
            </div>
            <div className="container-btn">
              <button type="button" className="btn">
                Reset
              </button>
              <button type="button" className="btn btn-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <h3>Diskusi 5 Teratas</h3>
          <ul className="trending">
            {trendings?.map((trending) => (
              <li key={trending?.id}>
                <div className="num-box">{trending?.id}</div>
                <p>{trending?.topic}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
