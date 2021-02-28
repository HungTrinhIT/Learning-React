import axios from "axios";
class UserServices {
  constructor() {
    if (process.env.NODE_ENV !== "production") {
      this.githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
      this.githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    } else {
      this.githubClientId = process.env.GITHUB_CLIENT_ID;
      this.githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    }
  }
  baseUrl = "https://api.github.com/";
  searchUsers = (text) => {
    const url =
      this.baseUrl +
      `search/users?q=${text}&client_id=${this.githubClientId}&client_sercret=${this.githubClientSecret}`;
    return axios.get(url);
  };

  getUserDetail = (username) => {
    const url =
      this.baseUrl +
      `users/${username}?client_id=${this.githubClientId}&client_secret=${this.githubClientSecret}`;

    return axios.get(url);
  };

  getRepository = (username) => {
    const url =
      this.baseUrl +
      `users/${username}/repos?client_id=${this.githubClientId}&client_sercret=${this.githubClientSecret}`;
    return axios.get(url);
  };
}

export default UserServices;
