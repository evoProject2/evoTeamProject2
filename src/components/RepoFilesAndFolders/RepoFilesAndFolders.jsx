import React, { useEffect, useState } from "react";
import RepoFolders from "./RepoFolders";
import Box from "@mui/material/Box";
import FilterByType from "./FilterByType";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);
  const [filteredByType, setFilteredByType] = useState(filesAndFolders);
  const [filter, setFilter] = useState([]);

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
      setFilteredByType(sortRepoContent);
    }
  };

  const handleSelectType = (selectedValue) => {
    setFilter(selectedValue.toLowerCase());
  };

  useEffect(() => {
    let filterByTypeArr = [];
    const filterArr = filesAndFolders.filter(() => {
      if (filter === "default") {
        return (filterByTypeArr = [...filesAndFolders]);
      } else {
        if (filter === "folder") {
          return (filterByTypeArr = [...filesAndFolders].filter((item) => {
            return item.type === "dir";
          }));
        }
        if (filter === "files") {
          return (filterByTypeArr = [...filesAndFolders].filter((item) => {
            return item.type === "file";
          }));
        }
      }
    });
    setFilteredByType(filterByTypeArr);
  }, [filter]);

  useEffect(() => {
    getRepoContent();
  }, []);

  return (
    <div>
      <Box sx={{ padding: "0px" }}>
        {filteredByType.length > 0 && (
          <FilterByType onFilterByType={handleSelectType} />
        )}
        {filteredByType.map((folder) => {
          return <RepoFolders key={folder.name} folder={folder} />;
        })}
      </Box>
    </div>
  );
};

export default RepoFilesAndFolders;
