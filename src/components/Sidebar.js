import React from "react";

export default function Sidebar({ trendings }) {
  return (
    <div id="sidebar">
      <h3 className="sidebar--header">Diskusi 5 Teratas</h3>
      <ul id="trending">
        {trendings?.map((trending) => (
          <li key={trending?.id} className="trending--list">
            <div className="trending--numbering">{trending?.id}</div>
            <p className="trending--text">{trending?.topic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
