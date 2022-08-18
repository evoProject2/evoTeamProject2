import "./FilterBar.css";
import {useDispatch, useSelector} from "react-redux";
import {FILTER} from "./filterConstants";
import {
    Checkbox,
    FormControl,
    FormControlLabel, FormGroup, FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
} from "@mui/material";
import {
    setNeedFilterFlag,
    setSortingDirection,
    setSortingType, showFiltersToggle, toggleSelectedLanguage,
} from "../../reducers/filterSlice";
import {capitalize, getReposLanguages} from "../../utils/functions";
// import { useEffect } from "react";
// import { filterRepositoriesFunction } from "./filterFunctions";
// import { setFilteredRepositories } from "../../reducers/userSlice";

export const FilterBar = () => {
    const filter = useSelector((state) => state.filter);
    // const user = useSelector(state => state.user)
    const reposLanguages = getReposLanguages(useSelector(state => state.user.repositories))
    const dispatch = useDispatch();

    const handleChange = ({from, lang, e}) => {
        switch (from) {
            case "radio-direction":
                dispatch(setSortingDirection(e.target.value));
                break;

            case "sorting-type-select":
                dispatch(setSortingType(e.target.value));
                break;
            case "language-checkbox":
                dispatch(toggleSelectedLanguage(lang));
                break
        }

        dispatch(setNeedFilterFlag(true));
    };

    return (
        filter.show && (
            <div className={"filter-bar-component-container"}>
                <div className={"filter-bar-component-title"} onClick={() => dispatch(showFiltersToggle())}>Filters
                </div>
                <FormControl fullWidth>
                    <InputLabel id="sort-select-label">Sort type</InputLabel>
                    <Select
                        labelId="sort-select-label"
                        id="sort-select"
                        // defaultValue={FILTER.sortBy.none}
                        value={filter.sorting.type}
                        // label="Sort"
                        onChange={(e) => handleChange({from: "sorting-type-select", e})}
                    >
                        {Object.keys(FILTER.sortBy).map((type) => (
                            <MenuItem key={type} value={type}>
                                {capitalize(FILTER.sortBy[type])}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {filter.sorting.type !== 'disabled' ? (
                    <FormControl>
                        {/*<FormLabel id="direction-radio-buttons-group-label"> Direction</FormLabel>*/}
                        <RadioGroup
                            aria-labelledby="direction-radio-buttons-group-label"
                            value={filter.sorting.direction}
                            name="radio-buttons-group"
                            onChange={(e) => handleChange({from: "radio-direction", e})}
                        >
                            {Object.keys(FILTER.directions).map((direction) => (
                                <FormControlLabel
                                    disabled={filter.sorting.type === 'disabled' ? true : false}
                                    key={direction}
                                    value={direction}
                                    control={<Radio/>}
                                    label={capitalize(FILTER.directions[direction])}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                ) : null}

                <FormGroup>
                    <FormLabel id="direction-radio-buttons-group-label"> Languages</FormLabel>
                    {
                        Object.keys(filter.languages).map(lang => <FormControlLabel key={lang} control={
                            <Checkbox
                                checked={filter.languages[lang].selected}
                                value={filter.languages[lang].selected}
                                onChange={(e) => handleChange({from: "language-checkbox", lang, e})}/>} label={lang}/>)
                    }

                </FormGroup>

            </div>
        )
    );
};

export default FilterBar;
