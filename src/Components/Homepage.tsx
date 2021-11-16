import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState<any>({});
  const [repo, setRepo] = useState<any>([]);

  const _handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setName(value);
  };

  const _handleCallApi = (e: any) => {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  };

  const _handleCallRepoApi = (e: any) => {
    fetch(`${profile.repos_url}`)
      .then((response) => response.json())
      .then((data) => setRepo(data));
  };

  return (
    <>
      <div className="input-btn-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Github Username"
          onChange={_handleInputChange}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            _handleCallApi(e);
            _handleCallRepoApi(e);
          }}
        >
          Search
        </button>
      </div>
      <div className="main-container">
        <div className="container1">
          
          <img
            src={profile.avatar_url}
            style={{ border: "1px solid" }}
            width="150px"
            alt=""
          />
          <div className="details">Name : {profile.name}</div>
          <div className="details">Login : {profile.login}</div>
          <div className="details">Id : {profile.id}</div>
          <div className="details">
            Profile Url :{" "}
            <a href={profile.html_url} target="_blank">
              Click Here
            </a>
          </div>
        </div>
        <div className="container2">
          <h1>Repositories</h1>
          {repo.map(
            (ele: {
              html_url: string | undefined;
              name:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <div>
                  •&nbsp;
                  <a href={ele.html_url} target="_blank">
                    {ele.name}
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
function e(e: any) {
  throw new Error("Function not implemented.");
}
