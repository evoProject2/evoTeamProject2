import {compareFunction, filterRepositoriesFunction} from "../FilterBar/filterFunctions";
import {FILTER} from "../FilterBar/filterConstants";

export const sortBy = {
    name: (filteredRepos, direction) =>
        filteredRepos.sort((a, b) => compareFunction(a.name.toLowerCase(), b.name.toLowerCase(), direction)),
    lastUpdate: (filteredRepos, direction) =>
        filteredRepos.sort((a, b) => compareFunction(a.last_push, b.last_push, direction)),
    disabled: (filteredRepos, direction) => filteredRepos

}

export const filterByRepositoryName = (allRepositories, filter) => {
    let filteredRepos = []
    allRepositories.forEach(repo => {
        if (filterRepositoriesFunction({repo, filter})) {
            filteredRepos.push(repo)
        }
    })
    return filteredRepos
}

export const filterByLanguages = (repos, languages) => {
    const selectedLanguages = Object.keys(languages).filter(checkBoxLanguage => languages[checkBoxLanguage].selected)
    if (selectedLanguages.length === 0)
        return repos

    return repos.filter(repo => {
        let flag = false
        selectedLanguages.forEach(checkBoxLanguage => {
            if (repo.languages[languages[checkBoxLanguage].name]) {
                flag = true
            }
        })
        return flag
    })

}