import {useDispatch, useSelector} from "react-redux";
import RepoCard from "../components/RepoCard";
import {useEffect} from "react";
import {getGithubLanguageColors} from "../utils/functions";
import {setGithubColors} from "../reducers/githubSlice";
import FilterLogic from "../components/FilterLogic/FilterLogic";
import Box from "@mui/material/Box";
import UserDetails from "../components/UserDetails";
import SearchRepoBar from "../components/SearchRepoBar/SearchRepoBar";
import FilterBar from "../components/FilterBar/FilterBar";
import {useNavigate} from "react-router";
import Grid from "@mui/material/Grid";

const UserRepositories = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const userAbout = user.userAbout;

    useEffect(() => {
        if (Object.keys(userAbout).length === 0) {
            navigate('/', {replace: true})
        } else {

            getGithubLanguageColors().then((colors) =>
                dispatch(setGithubColors(colors))
            )
        }

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
                alignSelf: "self-start",}}
            >
                <UserDetails/>
            </Box>
            <Box
                sx={{
                    height: "100%",
                    // display: "flex",
                    // flexDirection: "column",
                    // marginRight: "15em",
                    // marginTop: "2em",
                    // marginLeft: "5em",
                }}
            >
                <SearchRepoBar/>
                <Grid sx={{height: "100%"}}container spacing={2}>
                    {user.filteredRepositories &&
                    user.filteredRepositories.map((repo) => (
                        <Grid item key={repo.name} xs={6}>
                            <RepoCard repo={repo}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <FilterBar/>
            <FilterLogic/>
        </>
    );
};

export default UserRepositories;
