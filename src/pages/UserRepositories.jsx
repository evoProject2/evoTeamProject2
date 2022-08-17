import { useDispatch, useSelector } from "react-redux";
import RepoCard from "../components/RepoCard";
import { useEffect } from "react";
import { getGithubLanguageColors } from "../utils/functions";
import { setGithubColors } from "../githubSlice";
import Box from "@mui/material/Box";
import UserDetails from "../components/UserDetails";

const UserRepositories = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userAbout = user.userAbout;

  useEffect(() => {
    getGithubLanguageColors().then((colors) =>
      dispatch(setGithubColors(colors))
    );
    console.log(userAbout);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginRight: "15em",
          marginTop: "2em",
          marginLeft: "5em",
        }}
      >
        <UserDetails />
      </Box>

      <Box sx={{ height: "100%" }}>
        {user.repositories &&
          user.repositories.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
      </Box>
    </>
  );
};

export default UserRepositories;
