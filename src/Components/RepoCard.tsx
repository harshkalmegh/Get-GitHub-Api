import React from "react";

function RepoCard(props: any) {
    if (!props.data[0]) {
        return null
      }
  return (
    <div className="container2">
      <h1>Repositories</h1>
      {props.data.map((ele: any) => {
        return (
          <div key={ele.id}>
            <a href={ele.html_url} target="_blank">
              {ele.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default RepoCard;
