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
import ModalPopup from "./components/ModalPopup";
import Navbar from "./components/Navbar";

function App() {
  // const [modal, setModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  let dateFormat = (date) => format(new Date(date), "dd MMMM yyyy hh:mm");

  return (
    <div
      id="main-container"
      className={`${(modalLogin || modalRegister) && "disable-scroll"}`}
    >
      <ModalPopup
        modalLogin={modalLogin}
        modalRegister={modalRegister}
        setModalLogin={(value) => setModalLogin(value)}
        setModalRegister={(value) => setModalRegister(value)}
      />
      <Navbar
        navbarMenu={navbarMenu}
        setModalLogin={(value) => setModalLogin(value)}
        setModalRegister={(value) => setModalRegister(value)}
        setNavbarMenu={(value) => setNavbarMenu(value)}
      />
      <div id="main-content">
        <div className="main-left">
          <div className="section-topic">
            <h1 className="section-topic--header">
              Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi
              webcam
            </h1>
            <p className=".section-topic--body">
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
