import { setUserAbout, setUsername } from "../../utils/reducers/userSlice";
import {
  fetchUserAbout,
  getRepositoriesByUsername,
  getReposLanguages,
  isAnUsername,
  searchUsers,
} from "../../utils/functions";

import { setRepositories } from "../../utils/reducers/userSlice";
import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import UsersDisplay from "../../components/UsersDisplay";
import {
  introPageContainerStyle,
  introTitleStyle,
  inputStyle,
  inputAndBtnContainerStyle,
} from "./IntroPageStyle";

import TextField from "@mui/material/TextField";

import {
  setLanguages,
  setNeedFilterFlag,
} from "../../utils/reducers/filterSlice";
import { useEffect, useState } from "react";

export const IntroPage = () => {
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, []);

  // const handleFindButtonClicked = async () => {

  // };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = async () => {
    if (input.trim() !== "") {
      const users = await searchUsers(input);
      setSearchResults(users);

      if (error) {
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const trigger = () => {
    setShowInput(true);
  };

  return (
    <Box sx={introPageContainerStyle}>
      <Typography variant="h1" component="h1" sx={introTitleStyle}>
        Find your Repository
      </Typography>
      <Box onMouseEnter={trigger} sx={inputAndBtnContainerStyle}>
        <TextField
          onChange={handleInputChange}
          onKeyDown={handleEnterPressed}
          placeholder="Search for a username"
          sx={() => inputStyle(showInput)}
          type="text"
          color="secondary"
          error={error}
          helperText={error ? "Please enter a valid username" : ""}
        />
        <Button
          sx={{
            backgroundColor: "secondary.main",
            fontSize: "16px",
            visibility: "visible",
            marginBottom: error ? "20px" : "0px",
          }}
          onClick={handleSearch}
        >
          Find
        </Button>
      </Box>
      {searchResults?.total_count !== undefined && (
        <UsersDisplay users={searchResults.items} />
      )}
    </Box>
  );
};

export default IntroPage;
