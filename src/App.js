import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {Comments} from "./json/comments.json"

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <h1>Forum Anak IT</h1>
            <div className="search-bar">
              Search
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-search"
              />
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
            <div className="comment-container">
              {/* <div className="pic"></div> */}
              <img src="https://picsum.photos/200" alt="" className="pic" />
              <div className="comment-content">
                <h4>Neal Topham</h4>
                <div className="comment-date">08 February 2017 07.30</div>
                <p>
                  Mungkin ada fenomena paranormal yang tidak bisa dijelaskan.
                  Lebih baik nyala mati sendiri daripada tidak nyala sama sekali
                </p>
                <div className="comment-vote-container">
                  <p>3 point</p>
                  <div className="vote-square">
                    <FontAwesomeIcon icon={faArrowUp} className="vote-icon" />
                  </div>
                  <div className="vote-square">
                    <FontAwesomeIcon icon={faArrowDown} className="vote-icon" />
                  </div>
                </div>
                <div className="reply-container">
                  <div className="pic-2"></div>
                  <div className="comment-content">
                    <h4>Dyan Shahkin</h4>
                    <div className="comment-date">08 February 2017 07.30</div>
                    <p>Confirm, itu kemungkinan aktivitas paranormal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-comment-input">
            <h3 className="title-2">Tambahkan komentar</h3>
            <div className="comment-input-container">
              <input
                name="name"
                placeholder="Nama"
                type="text"
                className="comment-input ip-1"
              />
              <input
                name="email"
                placeholder="Email"
                type="text"
                className="comment-input ip-2"
              />
              <textarea
                name="comment"
                placeholder="Komentar anda"
                className="comment-input ip-3"
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
            <li>
              <div className="num-box">1</div>Cara mengetahui akun Facebook
              di-hack melalui aplikasi
            </li>
            <li>
              <div className="num-box">1</div>Batas aman overclock PC rakitan
            </li>
            <li>
              <div className="num-box">1</div>Cara mengetahui akun Facebook
              di-hack melalui aplikasi
            </li>
            <li>
              <div className="num-box">1</div>Cara mengetahui akun Facebook
              di-hack melalui aplikasi
            </li>
            <li>
              <div className="num-box">1</div>Cara mengetahui akun Facebook
              di-hack melalui aplikasi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
