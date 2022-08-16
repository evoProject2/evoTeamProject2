import { useSelector } from "react-redux";
import RepoCard from "./RepoCard";
export const UserRepositoriesPage = () => {
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
export default UserRepositoriesPage;
