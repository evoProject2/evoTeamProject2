import {FILTER} from "./filterConstants";

export const filterRepositoriesFunction = ({repo, filter}) => {
    if (repo.name.toLowerCase().includes(filter.inputValue.trim().toLowerCase()))
        return true
}

export const compareFunction = (a, b, direction) => {

    if (direction === FILTER.directions.ascending){
        if (a>b) return 1
        if (a<b) return -1
        return 0
    } else if (direction === FILTER.directions.descending) {
        if (a<b) return 1
        if (a>b) return -1
        return 0
    }



}

