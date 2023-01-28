import axios from "axios";
const Github = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: Github,
});

//search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepo = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repo] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repo: repo.data };
};
