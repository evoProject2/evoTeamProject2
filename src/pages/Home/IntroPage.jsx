import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { setUserAbout, setUsername } from "../../utils/reducers/userSlice";
import {
  fetchUserAbout,
  getRepositoriesByUsername,
  getReposLanguages,
  isAnUsername,
} from "../../utils/functions";

import { setRepositories } from "../../utils/reducers/userSlice";
import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import {
  introPageContainerStyle,
  introTitleStyle,
  inputStyle,
  introBtnStyle,
  inputAndBtnContainerStyle,
} from "./IntroPageStyle";

import {
  setLanguages,
  setNeedFilterFlag,
} from "../../utils/reducers/filterSlice";
import { useEffect, useState } from "react";

export const IntroPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleFindButtonClicked = async () => {
    if (user.username.trim() !== "" && (await isAnUsername(user.username))) {
      const userRepo = await getRepositoriesByUsername(user.username);
      const userAbout = await fetchUserAbout(user.username);
      dispatch(setRepositories(userRepo));
      // dispatch(setFilteredRepositories(userRepo))
      dispatch(setLanguages(getReposLanguages(userRepo)));
      dispatch(setNeedFilterFlag(true));
      dispatch(setUserAbout(userAbout));

      navigate(`/evoTeamProject2/${user.username}`);
      // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back history
    } else {
      alert(`'${user.username}' is not a valid username.`);
    }
  };

  const trigger = () => {
    setShowInput(true);
  };

  return (
    <Box>
      <Box sx={introPageContainerStyle}>
        <Typography variant="h1" component="h1" sx={introTitleStyle}>
          Find your Repository
        </Typography>
        <Box onMouseEnter={trigger} sx={inputAndBtnContainerStyle}>
          <Input
            onChange={(e) => dispatch(setUsername(e.target.value))}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleFindButtonClicked();
            }}
            placeholder={"Username"}
            sx={() => inputStyle(showInput)}
            type="text"
            color="secondary"
          />
          <Button sx={introBtnStyle} onClick={() => handleFindButtonClicked()}>
            Find
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroPage;
