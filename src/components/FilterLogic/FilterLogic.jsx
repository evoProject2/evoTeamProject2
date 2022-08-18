import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {compareFunction, filterRepositoriesFunction} from "../FilterBar/filterFunctions";
import {setFilteredRepositories} from "../../reducers/userSlice";
import {setNeedFilterFlag} from "../../reducers/filterSlice";
import {FILTER} from "../FilterBar/filterConstants";
import {filterByRepositoryName, sortBy} from "./filterLogicFunctions";

export const FilterLogic = () => {
    const needFilterFlag = useSelector(state => state.filter.needFilterFlag)
    const filter = useSelector(state => state.filter)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (needFilterFlag) {
            let filteredRepos = []

            filteredRepos = filterByRepositoryName(user.repositories, filter)
            filteredRepos = sortBy[filter.sorting.type](filteredRepos, filter.sorting.direction)

            dispatch(setFilteredRepositories(filteredRepos))
            dispatch(setNeedFilterFlag(false))
        }
    }, [needFilterFlag])
    return
}

export default FilterLogic