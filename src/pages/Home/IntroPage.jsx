import {useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";

import {
    setFilteredRepositories,
    setUserAbout,
    setUsername,
} from "../../reducers/userSlice";
import {
    fetchUserAbout,
    getRepositoriesByUsername, getReposLanguages,
    isAnUsername,
} from "../../utils/functions";

import {setRepositories} from "../../reducers/userSlice";
import {Box, Button, Typography} from "@mui/material";
import Input from "@mui/material/Input";
import {
    introPageContainerStyle,
    introTitleStyle,
    inputStyle,
    introBtnStyle,
    inputAndBtnContainerStyle,
} from "./IntroPageStyle";
import classes from "./IntroPage.module.css";
import {setLanguages, setNeedFilterFlag} from "../../reducers/filterSlice";
import {useEffect} from "react";

export const IntroPage = () => {
    let navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
    }, [])

    const handleFindButtonClicked = async () => {
        if (user.username.trim() !== "" && (await isAnUsername(user.username))) {
            const userRepo = await getRepositoriesByUsername(user.username);
            const userAbout = await fetchUserAbout(user.username);
            dispatch(setRepositories(userRepo));
            // dispatch(setFilteredRepositories(userRepo))
            dispatch(setLanguages(getReposLanguages(userRepo)))
            dispatch(setNeedFilterFlag(true));
            dispatch(setUserAbout(userAbout));

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
};

export default IntroPage;
