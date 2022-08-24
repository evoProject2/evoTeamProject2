import {
  ABOUT_URL,
  GITHUB_LANGUAGE_COLORS,
  REPOS_URL,
  SEARCH_URL,
} from "./constants";

export const fetchData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const isAnUsername = async (inputValue) => {
  const result = await fetch(REPOS_URL(inputValue));
  return result.status === 200 ? true : false;
};

export const fetchUserData = async (username) => {
  return await fetchData(REPOS_URL(username));
};

export const fetchUserAbout = async (username) => {
  const res = await fetchData(ABOUT_URL(username));
  return res;
};

export const getGithubLanguageColors = async () => {
  return await fetchData(GITHUB_LANGUAGE_COLORS);
};

export const getRepositoriesByUsername = async (username) => {
  const rawData = await fetchUserData(username);

  return await Promise.all(
    rawData.map(async (el) => {
      const languages = await fetchData(el.languages_url);
      let totalSum = 0;
      Object.keys(languages).forEach((lan) => (totalSum += languages[lan]));
      el["total_rows_from_languages"] = totalSum;
      el["languages"] = languages;
      return {
        name: el.name,
        languages: languages,
        total_rows_from_languages: totalSum,
        last_push: el.pushed_at,
        full_name: el.full_name,
      };
    })
  );
};

export const capitalize = (word) => {
  return word.length > 0
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word;
};

export const getReposLanguages = (repos) => {
  let languages = {};
  repos.forEach((repo) =>
    Object.keys(repo.languages).forEach((lang) => {
      if (!Object.keys(languages).includes(lang)) {
        languages[lang] = {
          name: lang,
          selected: false,
        };
      }
    })
  );
  return languages;
};

export const searchUsers = async (inputValue) => {
  const result = await fetchData(SEARCH_URL(inputValue));
  return result;
};
