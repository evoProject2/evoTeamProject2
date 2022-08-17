import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {compareFunction, filterRepositoriesFunction} from "../FilterBar/filterFunctions";
import {setFilteredRepositories} from "../../reducers/userSlice";
import {setNeedFilterFlag} from "../../reducers/filterSlice";
import {FILTER} from "../FilterBar/filterConstants";

export const FilterLogic = () => {
    const needFilterFlag = useSelector(state => state.filter.needFilterFlag)
    const filter = useSelector(state => state.filter)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (needFilterFlag) {
            let filteredRepos = []
            user.repositories.forEach(repo => {
                if (filterRepositoriesFunction({repo, filter})) {
                    filteredRepos.push(repo)
                }
            })

            // console.log(filter.sorting.type)

            switch (filter.sorting.type) {
                case 'name':
                    filteredRepos.sort((a, b) => compareFunction(a.name.toLowerCase(), b.name.toLowerCase(), filter.sorting.direction))
                    break
                case 'lastUpdate':
                    filteredRepos.sort((a, b) => compareFunction(a.last_push, b.last_push, filter.sorting.direction))
                    break

                case FILTER.sortBy.none:
                    break

                default:
                    break
            }


            dispatch(setFilteredRepositories(filteredRepos))
            dispatch(setNeedFilterFlag(false))
        }
    }, [needFilterFlag])
    return
}

export default FilterLogic