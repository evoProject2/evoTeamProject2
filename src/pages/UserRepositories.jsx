import { useSelector } from "react-redux";
import RepoCard from "../components/RepoCard";

export const UserRepositories = () => {
  const user = useSelector((state) => state.user);

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
