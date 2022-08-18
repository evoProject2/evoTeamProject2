import {ABOUT_URL, GITHUB_LANGUAGE_COLORS, REPOS_URL} from "./constants";

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
    //console.log(rawData)
    return await Promise.all(
        rawData.map(async (el) => {
            const languages = await fetchData(el.languages_url);
            // console.log(languages)
            let totalSum = 0
            Object.keys(languages).forEach(lan => totalSum += languages[lan])
            el['total_rows_from_languages'] = totalSum
            el['languages'] = languages
            // return el
            console.log(el)
            return {
                name: el.name,
                languages: languages,
                total_rows_from_languages: totalSum,
                last_push: el.pushed_at,
                full_name: el.full_name
            };
        })
    );
};

export const capitalize = (word) => {
    return word.length > 0 ?
        word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word
}
