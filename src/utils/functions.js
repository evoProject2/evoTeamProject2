import {useDispatch} from "react-redux";

export const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json);
    return json;
};

export const isAnUsername = async (inputValue) => {
    const REPOS_URL = `https://api.github.com/users/${inputValue}/repos`;
    let result = await fetch(REPOS_URL)
    return result.status === 200 ? true : false
}

export const fetchUserData = async (username) => {
    const REPOS_URL = `https://api.github.com/users/${username}/repos`;
    return await fetchData(REPOS_URL);
};

export const createUserDataObject = async (username) => {
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

    const requstResult = await fetchUserData(username)
    const repositories = await getRepositories(requstResult)
    return {
        username: username,
        repositories: repositories
    }
}

export const getRepositoriesByUsername = async (username) => {
    const rawData = await fetchUserData(username)
    //console.log(rawData)
    return await Promise.all(rawData.map(async el => {
        const languages = await fetchData(el.languages_url)
        return {
            name: el.name,
            languages: languages
        }
    }))
}



