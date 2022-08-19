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
import Typography from "@mui/material/Typography";

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
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // border: '2px solid white',
                borderRadius:1,
                // margin: '20px 0',
                // padding: 2
            }}>

            {/*<div className={"filter-bar-component-title"} onClick={() => dispatch(showFiltersToggle())}>*/}
            {/*    Filters*/}
            {/*</div>*/}

            <FormControl
                margin='normal'
                fullWidth
                // sx={{marginBottom:2}}
            >
                <FormLabel component="sort">Sort type</FormLabel>
                <Select
                    // labelId="sort-select-label"
                    id="sort-select"
                    value={filter.sorting.type}
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

            <FormControl  variant="outlined" fullWidth >
                <FormLabel component="languages">Languages</FormLabel>
                <FormGroup row >
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
                </FormGroup>
            </FormControl>

            <Button fullWidth onClick={() => dispatch(resetFilters())}>
                Reset filters
            </Button>
        </Box>

    );
};

export default FilterBar;
