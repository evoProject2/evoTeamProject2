import { useDispatch, useSelector } from "react-redux";
import RepoCard from "../../components/RepoCard/RepoCard";
import { useEffect } from "react";
import { getGithubLanguageColors } from "../../utils/functions";
import { setGithubColors } from "../../utils/reducers/githubSlice";
import FilterLogic from "../../components/FilterLogic/FilterLogic";
import Box from "@mui/material/Box";
import UserDetails from "../../components/RepoCard/UserDetails";
import SearchRepoBar from "../../components/SearchRepoBar/SearchRepoBar";
import { useNavigate } from "react-router";
import {
  showFiltersSet,
  showFiltersToggle,
} from "../../utils/reducers/filterSlice";
import FilterBar from "../../components/FilterBar/FilterBar";

const UserRepositories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const filter = useSelector((state) => state.filter);
  const userAbout = user.userAbout;

    useEffect(() => {
        if (Object.keys(userAbout).length === 0) {
            navigate("/evoTeamProject2/", {replace: true});
        } else {
            dispatch(showFiltersToggle());
            getGithubLanguageColors().then((colors) =>
                dispatch(setGithubColors(colors))
            );
        }
    }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <UserDetails />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media(max-width: 960px)": {
              width: "75%",
            },
          }}
        >
          <SearchRepoBar />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FilterBar />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: "20px",
              justifyContent: "flex-start",
              width: "90%",
              "@media(min-width: 500px)": {
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              },
            }}
          >
            {user.filteredRepositories?.length > 0
              ? user.filteredRepositories.map((repo, index) => (
                  <Box
                    key={`${repo.name}-${index}`}
                    sx={{
                      "@media(max-width: 500px)": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      },
                    }}
                  >
                    <RepoCard repo={repo} sx={{}} />
                  </Box>
                ))
              : "No repositories to show."}
          </Box>
        </Box>
      </Box>
      <FilterLogic />
    </>
  );
};

export default UserRepositories;
