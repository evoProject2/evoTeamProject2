import "./FilterBar.css";
import {useDispatch, useSelector} from "react-redux";
import {FILTER} from "./filterConstants";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, FormGroup, FormLabel, Input,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
} from "@mui/material";
import {
    resetFilters,
    setInputValue,
    setNeedFilterFlag,
    setSortingDirection,
    setSortingType, showFiltersToggle, toggleSelectedLanguage,
} from "../../reducers/filterSlice";
import {capitalize, getReposLanguages} from "../../utils/functions";

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

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
        filter.show &&

        <Card
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                border: '1px solid #ffffff99',
                margin: 2,
                padding: 3
            }}>

            {/*<div className={"filter-bar-component-title"} onClick={() => dispatch(showFiltersToggle())}>*/}
            {/*    Filters*/}
            {/*</div>*/}

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
                        row
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

            <Box>
                {
                    Object.keys(filter.languages).map(lang =>
                        <Button
                            // variant={filter.languages[lang].selected ? 'outlined' : 'text'}
                            variant="outlined"
                            // sx={{ color: 'white', backgroundColor: 'transparent', borderColor: 'white'}}
                            sx={filter.languages[lang].selected ?
                                {borderColor: 'white', backgroundColor: '#ffffff11', margin: '2px'}
                                : {color: '#ffffffBB', borderColor: '#ffffff11', margin: '2px'}}
                            // : { color: 'black', backgroundColor: 'white', borderColor: 'black', margin:'2px' }}
                            key={lang}
                            // value={filter.languages[lang].selected}
                            onClick={(e) => handleChange({from: "language-checkbox", lang, e})}
                        >
                            {lang}
                        </Button>
                    )}
            </Box>

            <Button fullWidth onClick={() => dispatch(resetFilters())}>
                Reset filters
            </Button>
        </Card>

    );
};

export default FilterBar;
