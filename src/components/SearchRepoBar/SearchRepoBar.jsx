import './SearchRepoBar.css'
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {resetFilters, setInputValue, setNeedFilterFlag, showFiltersToggle} from "../../utils/reducers/filterSlice";
import {Input, Button, TextField} from "@mui/material";
import FilterBar from "../FilterBar/FilterBar";


export const SearchRepoBar = () => {
    const user = useSelector(state => state.user)
    const filter = useSelector(state => state.filter)
    const value = useSelector(state => state.filter.inputValue)
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "700px",
            }}
        >

            <Box

                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Button
                    sx={filter.show ? {marginRight: 1, borderColor:'white'} : {marginRight: 1}}
                    variant="outlined"
                    onClick={() => dispatch(showFiltersToggle())}
                > Filters
                    {/*{filter.show ? 'Hide filters' : 'Show filters'}*/}
                </Button>
                <TextField
                    fullWidth
                    className={"search-bar-input"}
                    // placeholder={"Repository name to search ... "}
                    label='Repository name to search'
                    onChange={(e) => {
                        dispatch(setInputValue(e.target.value))
                        dispatch(setNeedFilterFlag(true))
                    }}/>
            </Box>


            <FilterBar/>
        </Box>
    )
}


export default SearchRepoBar