import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import {
  setFilteredRepositories,
  setUserAbout,
  setUsername,
} from "../../reducers/userSlice";
import {
  fetchUserAbout,
  getRepositoriesByUsername,
  getReposLanguages,
  isAnUsername,
} from "../../utils/functions";

import { setRepositories } from "../../reducers/userSlice";
import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import {
  introPageContainerStyle,
  introTitleStyle,
  inputStyle,
  introBtnStyle,
  inputAndBtnContainerStyle,
  inputStyleHover,
} from "./IntroPageStyle";
import { setLanguages, setNeedFilterFlag } from "../../reducers/filterSlice";
import { useEffect, useState } from "react";

export const IntroPage = () => {
  let navigate = useNavigate();
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

  // Input inputStyle
  let timing = 350;
  const inputStyle = {
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "2px",
    width: showInput ? "200px" : "0px",
    visibility: showInput ? "visible" : "hidden",
    transition: `width ${timing}ms ease-in-out`,
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
            sx={inputStyle}
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
