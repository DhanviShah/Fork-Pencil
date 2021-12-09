import React from "react";
import "./Contact.css";
import ProfileCard from "./ProfileCard";

function Contact() {
  return (
    <div className="Contact">
      {/* <header>
        <h1 className="title">SPM Group 23</h1>
        <h2 className="subtitle">
          Your one stop to become expert in Development!!!
        </h2>
      </header> */}
      <div className="ContactPhoto">
        <ProfileCard
          gender="female"
          profileName="Divya Vazirani"
          profileId="201801165"
        />
        <ProfileCard
          gender="female"
          profileName="Dhanvi Shah"
          profileId="201801167"
        />
        <ProfileCard
          gender="male"
          profileName="Param Modi"
          profileId="201801168"
        />
      </div>
      <div className="ContactEmail">
        <strong>
          For any queries, email us at :{" "}
          <a href={`mailto:fork-pencil@gmail.com`} className="emailLink">
            fork-pencil@gmail.com
          </a>
        </strong>
      </div>
    </div>
  );
}

export default Contact;
