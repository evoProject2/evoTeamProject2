export const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json);
    return json;
};

export const fetchUserData = async (username) => {
    const REPOS_URL = `https://api.github.com/users/${username}/repos`;
    return await fetchData(REPOS_URL);
};

export const createUserDataObject = async (username) => {
    const requstResult = await fetchUserData(username)
    const repositories = await getRepositories(requstResult)
    // console.log(requstResult)
    console.log(repositories)


    return {
        username: username,
        repositories: repositories
        // repositories: await getRepositories(requstResult)
    }
}

const getRepositories = async (rawData) => {
    return await Promise.all(rawData.map(async el => {
        const languages = await fetchData(el.languages_url)
        return {
            // id: el.id,
            name: el.name,
            languages: languages
        }
    }))
}

