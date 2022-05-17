import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ModalPopup({
  modalLogin,
  modalRegister,
  setModalLogin,
  setModalRegister,
}) {
  return (
    <>
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
    </>
  );
}
