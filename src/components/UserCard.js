import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import {
  getRepositoriesByUsername,
  fetchUserAbout,
  getReposLanguages,
} from "../utils/functions";
import { setLanguages, setNeedFilterFlag } from "../utils/reducers/filterSlice";
import { setRepositories, setUserAbout } from "../utils/reducers/userSlice";

const UserCard = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = async () => {
    const userRepo = await getRepositoriesByUsername(userInfo.login);
    const userAbout = await fetchUserAbout(userInfo.login);

    dispatch(setRepositories(userRepo));
    dispatch(setLanguages(getReposLanguages(userRepo)));
    dispatch(setNeedFilterFlag(true));
    dispatch(setUserAbout(userAbout));

    navigate(`/evoTeamProject2/${userInfo.login}`);
    // navigate(`/${inputValue}`, { replace: true })    // if u want to restrict back history
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 0px",
          padding: "20px 10px",
          width: "100%",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          cursor: "pointer",
          backgroundColor: theme.palette.cardBg,
        }}
        onClick={handleClick}
      >
        <Avatar src={userInfo?.avatar_url} alt={userInfo.login} />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6">{userInfo.login}</Typography>
        </Box>
      </Card>
    </>
  );
};

export default UserCard;
