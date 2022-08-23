import React, { useEffect, useState } from "react";
import RepoFolders from "./RepoFolders";
import Box from "@mui/material/Box";
import FilterByType from "./FilterByType";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);
  const [state, setState] = useState([]);
  const [filteredByType, setFilteredByType] = useState(state);
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
      setState(sortRepoContent);
      setFilteredByType(sortRepoContent);
    }
  };

  const handleSelectType = (selectedValue) => {
    setFilter(selectedValue.toLowerCase());
  };

  useEffect(() => {
    let filterByTypeArr = [];
    const filterArr = state.filter(() => {
      if (filter === "default") {
        return (filterByTypeArr = [...state]);
      } else {
        if (filter === "folder") {
          return (filterByTypeArr = [...state].filter((item) => {
            return item.type === "dir";
          }));
        }
        if (filter === "files") {
          return (filterByTypeArr = [...state].filter((item) => {
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
        <FilterByType onFilterByType={handleSelectType} />
        {filteredByType.map((folder) => {
          return <RepoFolders key={folder.name} folder={folder} />;
        })}
      </Box>
    </div>
  );
};

export default RepoFilesAndFolders;
