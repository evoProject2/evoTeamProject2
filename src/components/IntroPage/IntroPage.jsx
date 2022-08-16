import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

export const IntroPage = ({setUsername}) => {
    const [inputValue, setInputValue] = useState('')
    let navigate = useNavigate()

    const handleFindButtonClicked = () => {
        setUsername(inputValue)
        navigate(`/${inputValue}`)
        // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back hystory
    }

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
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(event) => {if (event.key === 'Enter') handleFindButtonClicked()}}
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
};

export default IntroPage;
