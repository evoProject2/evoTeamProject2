import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../userSlice";
import { getRepositoriesByUsername, isAnUsername } from "../../utils/functions";
import { setRepositories } from "../../userSlice";
import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import {
  introPageContainerStyle,
  introTitleStyle,
  inputStyle,
  introBtnStyle,
  inputAndBtnContainerStyle,
} from "./IntroPageStyle";
import classes from "./IntroPage.module.css";

export const IntroPage = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFindButtonClicked = async () => {
    if (user.username.trim() !== "" && (await isAnUsername(user.username))) {
      dispatch(setRepositories(await getRepositoriesByUsername(user.username)));
      navigate(`/${user.username}`);
      // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back history
    } else {
      alert(`'${user.username}' is not a valid username.`);
    }
  };

  return (
    <Box>
      <Box sx={introPageContainerStyle}>
        <Typography variant="h1" component="h1" sx={introTitleStyle}>
          Find user repositories
        </Typography>
        <Box
          className={`${classes["input_and-btn-container"]}`}
          sx={inputAndBtnContainerStyle}
        >
          <Input
            onChange={(e) => dispatch(setUsername(e.target.value))}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleFindButtonClicked();
            }}
            placeholder={"Username"}
            sx={inputStyle}
            type="text"
            color="secondary"
            className={`${classes["find_input"]}`}
          />
          <Button sx={introBtnStyle} onClick={() => handleFindButtonClicked()}>
            Find
          </Button>
        </Box>
      </Box>
    </Box>
  );

  // return <div className={"intro-page-container"}>
  //     <div> Find user repositories </div>
  //     <div>
  //         <input onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}}
  //                onChange={(e) => dispatch(setUsername(e.target.value))} placeholder={"Username"}/>
  //         <button onClick={() => handleFindButtonClicked()}> Find </button>
  //     </div>
  // </div>
};

export default IntroPage;
