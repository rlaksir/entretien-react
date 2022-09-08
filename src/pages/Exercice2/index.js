import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Exercice2() {
  const API_URL = "https://api.github.com/users";
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      response.json().then((response) => setUserData(response));
    }
    fetchData();
  }, []);

  return !userData.length ? (
    <h2>Fetching data ...</h2>
  ) : (
    <div>
      {userData.map((user) => (
        <div className="card" style={{ width: "18rem" }} key={user.id}>
          <img src={user.avatar_url} alt="avatar"/>
          <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <p className="card-text">{}</p>
            <a href={user.url} className="btn btn-primary">
              more ...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
