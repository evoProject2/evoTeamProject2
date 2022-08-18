import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {compareFunction, filterRepositoriesFunction} from "../FilterBar/filterFunctions";
import {setFilteredRepositories} from "../../reducers/userSlice";
import {setLanguages, setNeedFilterFlag} from "../../reducers/filterSlice";
import {FILTER} from "../FilterBar/filterConstants";
import {filterByLanguages, filterByRepositoryName, sortBy} from "./filterLogicFunctions";
import {getReposLanguages} from "../../utils/functions";

export const FilterLogic = () => {
    const needFilterFlag = useSelector(state => state.filter.needFilterFlag)
    const filter = useSelector(state => state.filter)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        if (needFilterFlag) {
            let filteredRepos = user.repositories

            filteredRepos = filterByRepositoryName(filteredRepos, filter)
            filteredRepos = sortBy[filter.sorting.type](filteredRepos, filter.sorting.direction)
            filteredRepos = filterByLanguages(filteredRepos, filter.languages)
            dispatch(setFilteredRepositories(filteredRepos))
            dispatch(setNeedFilterFlag(false))
        }
    }, [needFilterFlag])
    return
}

export default FilterLogic