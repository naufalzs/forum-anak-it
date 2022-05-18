import React from "react";

export default function SectionAddComment() {
  return (
    <div className="section-add-comment">
      <h3 className="section-add-comment--header">Tambahkan komentar</h3>
      <div className="comment-input--container">
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
      <div className="comment-input--btn-container">
        <button type="button" className="btn">
          Reset
        </button>
        <button type="button" className="btn btn-submit">
          Submit
        </button>
      </div>
    </div>
  );
}
