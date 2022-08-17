import './SearchRepoBar.css'
import Card from "@mui/material/Card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setInputValue} from "../../reducers/filterSlice";

export const SearchRepoBar = () => {
    // const input = useSelector(state => state.input)
    const value = useSelector(state => state.filter.inputValue)
    const dispatch = useDispatch()

    // useEffect(()=> {
    //     console.log(value)
    // }, [value])

    const handleInputOnChange = (newValue) => {
        dispatch(setInputValue(newValue))

    }

    return <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: "10px 0px",
            p: 5,
            minWidth: "500px",
        }}
    >
        <input className={"search-bar-input"} placeholder={"Repository name ... "} onChange={(e) => handleInputOnChange(e.target.value)}/>
    </Card>
}


export default SearchRepoBar