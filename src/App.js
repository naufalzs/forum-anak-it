import React, { useState } from "react";
import "./styles/Main.scss";

import ModalPopup from "./components/ModalPopup";
import Navbar from "./components/Navbar";
import SectionTopic from "./components/SectionTopic";
import SectionComment from "./components/SectionComment";
import SectionAddComment from "./components/SectionAddComment";
import Sidebar from "./components/Sidebar";

import comments from "./json/comments.json";
import trendings from "./json/trendings.json";

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

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
        setModalLogin={(value) => setModalLogin(value)}
        setModalRegister={(value) => setModalRegister(value)}
      />
      <div id="content--container">
        <div id="main-content">
          <SectionTopic />
          <SectionComment comments={comments} />
          <SectionAddComment />
        </div>
        <Sidebar trendings={trendings} />
      </div>
    </div>
  );
}

export default App;
