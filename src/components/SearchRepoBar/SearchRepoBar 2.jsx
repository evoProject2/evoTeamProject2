import "./SearchRepoBar.css";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setInputValue,
  setNeedFilterFlag,
  showFiltersToggle,
} from "../../reducers/filterSlice";
import { Button } from "@mui/material";

export const SearchRepoBar = () => {
  const user = useSelector((state) => state.user);
  const filter = useSelector((state) => state.filter);
  const value = useSelector((state) => state.filter.inputValue);
  const dispatch = useDispatch();

  // useEffect(()=> {
  //     console.log(value)
  // }, [value])

  const handleInputOnChange = (newValue) => {
    dispatch(setInputValue(newValue));
    dispatch(setNeedFilterFlag(true));
  };

  return (
    <Card
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
      <input
        className={"search-bar-input"}
        placeholder={"Repository name ... "}
        onChange={(e) => handleInputOnChange(e.target.value)}
      />
      <Button onClick={() => dispatch(showFiltersToggle())}>Filters</Button>
    </Card>
  );
};

export default SearchRepoBar;
