import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFilteredRepositories } from "../../utils/reducers/userSlice";
import { setNeedFilterFlag } from "../../utils/reducers/filterSlice";
// prettier-ignore
import {filterByLanguages, filterByRepositoryName, sortBy} from "./filterLogicFunctions";

export const FilterLogic = () => {
  const needFilterFlag = useSelector((state) => state.filter.needFilterFlag);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (needFilterFlag) {
      let filteredRepos = user.repositories;

      filteredRepos = filterByRepositoryName(filteredRepos, filter);
      filteredRepos = sortBy[filter.sorting.type](
        filteredRepos,
        filter.sorting.direction
      );
      filteredRepos = filterByLanguages(filteredRepos, filter.languages);
      dispatch(setFilteredRepositories(filteredRepos));
      dispatch(setNeedFilterFlag(false));
    }
  }, [needFilterFlag]);
  return;
};

export default FilterLogic;
