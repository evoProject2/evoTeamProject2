import { REPOS_URL } from "./constants";

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

export const createUserDataObject = async (username) => {
  const getRepositories = async (rawData) => {
    return await Promise.all(
      rawData.map(async (el) => {
        const languages = await fetchData(el.languages_url);
        return {
          // id: el.id,
          name: el.name,
          languages: languages,
        };
      })
    );
  };

  const requstResult = await fetchUserData(username);
  const repositories = await getRepositories(requstResult);
  return {
    username: username,
    repositories: repositories,
  };
};

export const getRepositoriesByUsername = async (username) => {
  const rawData = await fetchUserData(username);
  //console.log(rawData)
  return await Promise.all(
    rawData.map(async (el) => {
      const languages = await fetchData(el.languages_url);
      return {
        // id: el.id,
        name: el.name,
        languages: languages,
      };
    })
  );
};
