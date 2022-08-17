import { useDispatch, useSelector } from "react-redux";
import RepoCard from "../components/RepoCard";
import { useEffect } from "react";
import RepoFilesAndFolders from "../components/RepoFilesAndFolders/RepoFilesAndFolders";
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
        {user.repositories.length > 0 &&
          user.repositories.map((repo) => (
            <div key={repo.name}>
              <RepoCard repo={repo} />
              <RepoFilesAndFolders repo={repo} />
            </div>
          ))}
      </Box>
    </>
  );
};

export default UserRepositories;
