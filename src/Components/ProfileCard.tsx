import React from "react";

function ProfileCard(props: any) {
  return (
    <div className="container1">
      <img
        src={props.data.avatar_url}
        style={{ border: "1px solid" }}
        width="150px"
        alt=""
      />
      <div className="details">Name : {props.data.name}</div>
      <div className="details">Login : {props.data.login}</div>
      <div className="details">Id : {props.data.id}</div>
      <div className="details">
        props.data Url :{" "}
        <a href={props.data.html_url} target="_blank">
          Click Here
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
