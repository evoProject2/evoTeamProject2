import React, { useEffect, useState } from "react";
import RepoFolders from "./RepoFolders";
import Box from "@mui/material/Box";
// import { useSelector } from "react-redux";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);

  // const sortBy = useSelector((state) => state.filterRepoContent.sortBy);
  // console.log(sortBy);
  const repoContentApi = `https://api.github.com/repos/${repo.full_name}/contents`;

  const getRepoContent = async () => {
    const data = await fetch(repoContentApi);
    const res = await data.json();
    const sortRepoContent = [...res].sort((a, b) => {
      return a.type > b.type ? 1 : -1;
    });
    if (!res.documentation_url) {
      // Fix the object problem when I have an empty repo
      setFilesAndFolder(sortRepoContent);
    }
  };

  useEffect(() => {
    getRepoContent();
  }, []);

  return (
    <div>
      <Box sx={{ padding: "0px" }}>
        {filesAndFolders.map((folder) => {
          return <RepoFolders key={folder.name} folder={folder} />;
        })}
      </Box>
    </div>
  );
};

export default RepoFilesAndFolders;
