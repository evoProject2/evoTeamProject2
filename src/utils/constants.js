export const REPOS_URL = (user) => `https://api.github.com/users/${user}/repos`;
export const ABOUT_URL = (user) => `https://api.github.com/users/${user}`;
export const SEARCH_URL = (user) =>
  `https://api.github.com/search/users?q=${user}`;
export const GITHUB_LANGUAGE_COLORS =
  "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
