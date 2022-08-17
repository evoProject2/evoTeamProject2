import {useDispatch, useSelector} from "react-redux";
import RepoCard from "../components/RepoCard";
import {useEffect} from "react";
import {getGithubLanguageColors} from "../utils/functions";
import {setGithubColors} from "../reducers/githubSlice";
import FilterLogic from '../components/FilterLogic/FilterLogic'
import Box from "@mui/material/Box";
import UserDetails from "../components/UserDetails";
import SearchRepoBar from "../components/SearchRepoBar/SearchRepoBar";
import FilterBar from "../components/FilterBar/FilterBar";

const UserRepositories = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const userAbout = user.userAbout;

    useEffect(() => {
        getGithubLanguageColors().then((colors) =>
            dispatch(setGithubColors(colors))
        );
        // console.log(userAbout);
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
                <UserDetails/>
            </Box>

            <Box sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginRight: "15em",
                marginTop: "2em",
                marginLeft: "5em",
            }}>

                <SearchRepoBar/>

                <Box sx={{height: "100%"}}>
                    {user.filteredRepositories &&
                    user.filteredRepositories.map((repo) => (
                        <RepoCard key={repo.name} repo={repo}/>
                    ))}
                </Box>
            </Box>

            <FilterBar/>
            <FilterLogic/>
        </>
    );
};

export default UserRepositories;
