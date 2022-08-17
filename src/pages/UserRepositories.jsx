import {useDispatch, useSelector} from "react-redux";
import RepoCard from "../components/RepoCard";
import {useEffect} from "react";
import {getGithubLanguageColors} from "../utils/functions";
import {setGithubColors} from "../githubSlice";

export const UserRepositories = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const userAbout = user.userAbout

  useEffect(() => {
    getGithubLanguageColors().then(colors => dispatch(setGithubColors(colors)))
    // console.log(userAbout)
  }, [])

  return (
    <div>
      {user.repositories &&
        user.repositories.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
    </div>
  );
};
export default UserRepositories;
