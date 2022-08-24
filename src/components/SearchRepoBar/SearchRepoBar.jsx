import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
// prettier-ignore
import {setInputValue, showFiltersSet, showFiltersToggle} from "../../utils/reducers/filterSlice";
import {Button, TextField, IconButton, InputAdornment} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import {useEffect} from "react";

export const SearchRepoBar = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showFiltersSet(false))
    }, [])

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "510px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                }}
            >
                <TextField
                    fullWidth
                    label={"Search repository"}
                    value={filter.inputValue}
                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                    sx={{marginRight: "10px"}}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                sx={{
                                    visibility:
                                        filter.inputValue.length > 0 ? "visible" : "hidden",
                                }}
                                onClick={() => dispatch(setInputValue(""))}
                            >
                                <ClearIcon/>
                            </IconButton>
                        ),
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    sx={
                        filter.show
                            ? {
                                marginRight: 1,
                                borderColor: '#fff',
                                backgroundColor: '#ffffff11'
                            }
                            : {marginRight: 1}
                    }
                    variant="outlined"
                    onClick={() => dispatch(showFiltersToggle())}
                >
                    Filters
                </Button>
            </Box>
        </Box>
    );
};

export default SearchRepoBar;
