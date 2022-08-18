import React, { useEffect, useState } from "react";
import RepoFolders from "./RepoFolders";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);

  const repoContentApi = `https://api.github.com/repos/${repo.full_name}/contents`;

  const getRepoContent = async () => {
    const data = await fetch(repoContentApi);
    const res = await data.json();
    if (!res.documentation_url) {
      // Fix the object problem when I have an empty repo
      setFilesAndFolder(res);
    }
  };
  useEffect(() => {
    getRepoContent();
  }, []);

  return (
    <div>
      <div style={{ padding: "0" }}>
        <RepoFolders filesAndFolders={filesAndFolders} />
      </div>
    </div>
  );
};

export default RepoFilesAndFolders;
