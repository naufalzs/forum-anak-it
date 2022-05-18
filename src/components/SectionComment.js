import React from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

export default function SectionComment({ comments }) {
  let dateFormat = (date) => format(new Date(date), "dd MMMM yyyy hh:mm");

  return (
    <div className="section-comment">
      <h2 className="section-comment--header">Komentar</h2>
      {comments?.map((item) => (
        <div key={item?.id} id="comment--container">
          <img src={item?.avatar} alt="" className="avatar-big" />
          <div className="comment--content">
            <h4 className="comment--header">{item?.author}</h4>
            <div className="comment--date">{dateFormat(item?.date)}</div>
            <p className="comment--body">{item?.message}</p>

            <div className="vote--container">
              <p className="vote--text">{item?.point} point</p>
              <div className="vote-btn--container">
                <FontAwesomeIcon icon={faArrowUp} className="vote-btn--icon" />
              </div>
              <div className="vote-btn--container">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="vote-btn--icon"
                />
              </div>
            </div>
            {item?.replies?.map((reply) => (
              <div key={reply?.id} id="reply--container">
                <img src={reply?.avatar} alt="" className="avatar-small" />
                <div className="comment--content">
                  <h4 className="comment--header">{reply?.author}</h4>
                  <div className="comment--date">{dateFormat(reply?.date)}</div>
                  <p className="comment--body">{reply?.message}</p>

                  <div className="vote--container">
                    <p className="vote--text">{reply?.point} point</p>
                    <div className="vote-btn--container">
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="vote-btn--icon"
                      />
                    </div>
                    <div className="vote-btn--container">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="vote-btn--icon"
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
  );
}
