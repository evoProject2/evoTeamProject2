import { useState } from "react";

import { searchUsers } from "../../utils/functions";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import UsersDisplay from "../../components/UsersDisplay";
import {
  introPageContainerStyle,
  introTitleStyle,
  inputStyle,
  inputAndBtnContainerStyle,
} from "./IntroPageStyle";

export const IntroPage = () => {
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = async () => {
    if (input.trim() !== "") {
      setLoading(true);
      try {
        const users = await searchUsers(input);
        setSearchResults(users);

        if (error) {
          setError(false);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
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
            textTransform: "none",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {searchResults?.total_count !== undefined && (
        <UsersDisplay users={searchResults.items} loading={loading} />
      )}
    </Box>
  );
};

export default IntroPage;
