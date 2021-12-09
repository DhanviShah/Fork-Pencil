import React from "react";
import "./ProfileCard.css";
import malePhoto from "./male.jpg";
import femalePhoto from "./female.jpg";

function ProfileCard({ gender, profileName, profileId }) {
  return (
    <div className="profileCard">
      <div>{profileName}</div>
      {gender === "male" ? (
        <img src={malePhoto} alt={profileName} className="profilePhoto" />
      ) : (
        <img src={femalePhoto} alt={profileName} className="profilePhoto" />
      )}
      <div>
        <a href={`mailto:${profileId}@daiict.ac.in}`} className="emailLink">
          {profileId}@daiict.ac.in
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
