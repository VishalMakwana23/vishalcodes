import React from "react";

export default function ContactCard(props) {
  return (
    <li>
      <h6>{props.info.option}</h6>
      <span className="contact-link" style={{ cursor: "pointer" }}>
        {props.info.detail}
      </span>
    </li>
  );
}
