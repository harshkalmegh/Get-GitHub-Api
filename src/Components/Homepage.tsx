import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import axios from "axios"
import "./Homepage.css";
import { GetRequest } from "../Utilities/Network";
import ProfileCard from "./ProfileCard";
import RepoCard from "./RepoCard";


const Homepage = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState<any>({});
  const [repo, setRepo] = useState<any>([]);

  const _handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setName(value);
  };


  const _handleSearchDetail = async() => {
    const profileResponse = await GetRequest(`https://api.github.com/users/${name}`)
    if (!profileResponse) {
    return
  }
    setProfile(profileResponse)

    const repoResponse = await GetRequest(profileResponse.repos_url) 
    if (!repoResponse) {
    return
  }
    setRepo(repoResponse)
  }

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
          onClick={_handleSearchDetail}
        >
          Search
        </button>
      </div>
      <div className="main-container">
        <ProfileCard data={profile} />
        <RepoCard data={repo}/>
        
      </div>
    </>
  );
};

export default Homepage;
function e(e: any) {
  throw new Error("Function not implemented.");
}
