import { useSelector } from "react-redux";
import RepoCard from "../components/RepoCard";
import { useEffect } from "react";
import RepoFilesAndFolders from "../components/RepoFilesAndFolders/RepoFilesAndFolders";

export const UserRepositories = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      {user.repositories.length > 0 &&
        user.repositories.map((repo) => (
          <div key={repo.name}>
            <RepoCard repo={repo} />
            <RepoFilesAndFolders repo={repo} />
          </div>
        ))}
    </div>
  );
};
export default UserRepositories;
