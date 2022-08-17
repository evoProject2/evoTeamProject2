import './FilterBar.css'
import {useDispatch, useSelector} from "react-redux";
import {FILTER} from "./filterConstants";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Switch
} from "@mui/material";
import {setSortingType} from "../../reducers/filterSlice";
import {capitalize} from "../../utils/functions";

export const FilterBar = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    return <div className={"filter-bar-component-container"}>
        <div className={"filter-bar-component-title"}>Filters</div>

        {/*<div className={"filter-row"}>*/}

            <FormControl fullWidth>
                <InputLabel id="sort-select-label">Sort type</InputLabel>
                <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    value={filter.sortingType}
                    label="Age"
                    onChange={(e) => dispatch(setSortingType(e.target.value))}
                    >
                    {Object.keys(FILTER.sortBy).map(type => <MenuItem value={type}>{capitalize(type)}</MenuItem>)}
                </Select>
            </FormControl>



            <FormControl>
                <FormLabel id="direction-radio-buttons-group-label"> Direction</FormLabel>
                <RadioGroup
                    aria-labelledby="direction-radio-buttons-group-label"
                    defaultValue={FILTER.directions.ascending}
                    name="radio-buttons-group"
                >
                    {
                        Object.keys(FILTER.directions).map(direction =>
                            <FormControlLabel value={direction} control={<Radio/>}
                                              label={capitalize(direction)}/>)
                    }
                </RadioGroup>
            </FormControl>
        {/*</div>*/}


    </div>
}

export default FilterBar