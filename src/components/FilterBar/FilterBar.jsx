import "./FilterBar.css";
import {useDispatch, useSelector} from "react-redux";
import {FILTER} from "./filterConstants";
import {
    Box,
    Button,
    Card,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {
    resetFilters,
    setNeedFilterFlag,
    setSortingDirection,
    setSortingType, toggleDirectionSwitch,
    toggleSelectedLanguage,
} from "../../utils/reducers/filterSlice";
import {capitalize, getReposLanguages} from "../../utils/functions";
import Typography from "@mui/material/Typography";
import {DirectionSwitch} from "./DirectionSwitch";
import Stack from "@mui/material/Stack";

export const FilterBar = () => {
    const theme = useTheme();
    const filter = useSelector((state) => state.filter);

    const reposLanguages = getReposLanguages(
        useSelector((state) => state.user.repositories)
    );
    const dispatch = useDispatch();

    const handleChange = (props) => {
        const handleByType = {
            radioDirection: ({e}) => dispatch(setSortingDirection(e.target.value)),
            sortingTypeSelect: ({e}) => dispatch(setSortingType(e.target.value)),
            languageCheckbox: ({lang}) => dispatch(toggleSelectedLanguage(lang)),
            directionSwitch: ({e}) => {
                console.log(e.target.value)
                dispatch(toggleDirectionSwitch())

            }
        };
        handleByType[props.from](props);
        dispatch(setNeedFilterFlag(true));
    };

    return (
        filter.show && (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    // justifyContent: "center",
                    alignItems: "center",
                    // boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                    // backgroundColor: theme.palette.cardBg,
                    width: "510px",
                    // padding: "10px",
                }}
            >
                {/*<Typography variant="h5">Filters</Typography>*/}


                <FormControl margin="normal" fullWidth>
                    <FormLabel>Sort type</FormLabel>
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Select
                            fullWidth
                            id="sort-select"
                            value={filter.sorting.type}
                            onChange={(e) => handleChange({from: "sortingTypeSelect", e})}
                        >
                            {Object.keys(FILTER.sortBy).map((type) => (
                                <MenuItem key={type} value={type}>
                                    {capitalize(FILTER.sortBy[type])}
                                </MenuItem>
                            ))}
                        </Select>

                        {filter.sorting.type !== "disabled" &&
                        <FormControlLabel
                            value="s"
                            control={<DirectionSwitch
                                disabled={filter.sorting.type === "disabled" ? true : false}
                                onChange={(e) => handleChange({from: "directionSwitch", e})}
                                value={filter.sorting.directionSwitch}
                                checked={filter.sorting.directionSwitch}
                            />}
                            label={filter.sorting.directionSwitch ? ' Ascending ' : 'Descending'}
                            labelPlacement={filter.sorting.directionSwitch ? 'top' : 'bottom'}
                            sx={{width:'120px'}}
                        />
                        }
                    </Box>
                </FormControl>


                {/*<FormControl>*/}
                {/*    <RadioGroup*/}
                {/*        row*/}
                {/*        aria-labelledby="direction-radio-buttons-group-label"*/}
                {/*        value={filter.sorting.direction}*/}
                {/*        name="radio-buttons-group"*/}
                {/*        onChange={(e) => handleChange({from: "radioDirection", e})}*/}
                {/*    >*/}
                {/*        {Object.keys(FILTER.directions).map((direction) => (*/}
                {/*            <FormControlLabel*/}
                {/*                disabled={filter.sorting.type === "disabled" ? true : false}*/}
                {/*                key={direction}*/}
                {/*                value={direction}*/}
                {/*                control={<Radio/>}*/}
                {/*                label={capitalize(FILTER.directions[direction])}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </RadioGroup>*/}
                {/*</FormControl>*/}


                <FormControl variant="outlined" fullWidth>
                    <FormLabel>Languages</FormLabel>
                    <FormGroup row sx={{display: "flex", flexWrap: "wrap"}}>
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
                                    handleChange({from: "languageCheckbox", lang, e})
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
