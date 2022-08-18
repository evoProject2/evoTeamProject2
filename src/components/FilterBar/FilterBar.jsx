import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import { FILTER } from "./filterConstants";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import {
  setNeedFilterFlag,
  setSortingDirection,
  setSortingType,
} from "../../reducers/filterSlice";
import { capitalize } from "../../utils/functions";
// import { useEffect } from "react";
// import { filterRepositoriesFunction } from "./filterFunctions";
// import { setFilteredRepositories } from "../../reducers/userSlice";

export const FilterBar = () => {
  const filter = useSelector((state) => state.filter);
  //   const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (from, e) => {
    switch (from) {
      case "radio-direction":
        dispatch(setSortingDirection(e.target.value));
        break;

      case "sorting-type-select":
        dispatch(setSortingType(e.target.value));
        break;
    }
    dispatch(setNeedFilterFlag(true));
  };

  return (
    filter.show && (
      <div className={"filter-bar-component-container"}>
        <div className={"filter-bar-component-title"}>Filters</div>
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort type</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            // defaultValue={FILTER.sortBy.none}
            value={filter.sorting.type}
            // label="Age"
            onChange={(e) => handleChange("sorting-type-select", e)}
          >
            {Object.keys(FILTER.sortBy).map((type) => (
              <MenuItem key={type} value={type}>
                {capitalize(FILTER.sortBy[type])}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {filter.sorting.type !== "none" ? (
          <FormControl>
            {/*<FormLabel id="direction-radio-buttons-group-label"> Direction</FormLabel>*/}
            <RadioGroup
              aria-labelledby="direction-radio-buttons-group-label"
              value={filter.sorting.direction}
              name="radio-buttons-group"
              onChange={(e) => handleChange("radio-direction", e)}
            >
              {Object.keys(FILTER.directions).map((direction) => (
                <FormControlLabel
                  disabled={filter.sorting.type === "none" ? true : false}
                  key={direction}
                  value={direction}
                  control={<Radio />}
                  label={capitalize(FILTER.directions[direction])}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ) : null}
      </div>
    )
  );
};

export default FilterBar;
