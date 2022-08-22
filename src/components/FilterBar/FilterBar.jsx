import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import { FILTER } from "./filterConstants";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import {
  resetFilters,
  setNeedFilterFlag,
  setSortingDirection,
  setSortingType,
  toggleSelectedLanguage,
} from "../../utils/reducers/filterSlice";
import { capitalize, getReposLanguages } from "../../utils/functions";
import Box from "@mui/material/Box";

export const FilterBar = () => {
  const filter = useSelector((state) => state.filter);

  const reposLanguages = getReposLanguages(
    useSelector((state) => state.user.repositories)
  );
  const dispatch = useDispatch();

  const handleChange = ({ from, lang, e }) => {
    switch (from) {
      case "radio-direction":
        dispatch(setSortingDirection(e.target.value));
        break;

      case "sorting-type-select":
        dispatch(setSortingType(e.target.value));
        break;
      case "language-checkbox":
        dispatch(toggleSelectedLanguage(lang));
        break;
    }

    dispatch(setNeedFilterFlag(true));
  };

  return (
    filter.show && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl margin="normal" fullWidth>
          <FormLabel component="sort">Sort type</FormLabel>
          <Select
            id="sort-select"
            value={filter.sorting.type}
            onChange={(e) => handleChange({ from: "sorting-type-select", e })}
          >
            {Object.keys(FILTER.sortBy).map((type) => (
              <MenuItem key={type} value={type}>
                {capitalize(FILTER.sortBy[type])}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="direction-radio-buttons-group-label"
            value={filter.sorting.direction}
            name="radio-buttons-group"
            onChange={(e) => handleChange({ from: "radio-direction", e })}
          >
            {Object.keys(FILTER.directions).map((direction) => (
              <FormControlLabel
                disabled={filter.sorting.type === "disabled" ? true : false}
                key={direction}
                value={direction}
                control={<Radio />}
                label={capitalize(FILTER.directions[direction])}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <FormLabel component="languages">Languages</FormLabel>
          <FormGroup row sx={{ display: "flex", flexWrap: "wrap" }}>
            {Object.keys(filter.languages).map((lang) => (
              <Button
                variant="outlined"
                sx={
                  filter.languages[lang].selected
                    ? {
                        margin: "2px",
                      }
                    : {
                        margin: "2px",
                      }
                }
                key={lang}
                onClick={(e) =>
                  handleChange({ from: "language-checkbox", lang, e })
                }
              >
                {lang}
              </Button>
            ))}
          </FormGroup>
        </FormControl>

        <Button fullWidth onClick={() => dispatch(resetFilters())}>
          Reset filters
        </Button>
      </Box>
    )
  );
};

export default FilterBar;
