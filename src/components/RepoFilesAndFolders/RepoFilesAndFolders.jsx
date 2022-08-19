import React, { useEffect, useState } from "react";
import RepoFolders from "./RepoFolders";
import Box from "@mui/material/Box";

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
      <Box sx={{ padding: "0" }}>
        {filesAndFolders.map((folder) => {
          return (
            <RepoFolders
              key={folder.name}
              filesAndFolders={filesAndFolders}
              folder={folder}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default RepoFilesAndFolders;
