import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue, setNeedFilterFlag, showFiltersToggle} from "../../utils/reducers/filterSlice";
import {Button, TextField, IconButton} from "@mui/material";
import FilterBar from "../FilterBar/FilterBar";
import {SearchOutlined} from "@mui/icons-material";

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
                width: "700px",
            }}
        >

            <Box

                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >

                <TextField
                    fullWidth
                    label='Repository name to search'
                    onChange={(e) => {
                        dispatch(setInputValue(e.target.value))
                        dispatch(setNeedFilterFlag(true))
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchOutlined/>
                            </IconButton>
                        ),
                    }}
                />

                <Button
                    sx={filter.show ? {marginRight: 1, borderColor: 'white'} : {marginRight: 1}}
                    variant="outlined"
                    onClick={() => dispatch(showFiltersToggle())}
                > Filters
                    {/*{filter.show ? 'Hide filters' : 'Show filters'}*/}
                </Button>
            </Box>


        </Box>
    )
}


export default SearchRepoBar