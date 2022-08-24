import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { AiFillFolderOpen, AiFillFile } from "react-icons/ai";
import Box from "@mui/material/Box";
import {
  fileContainerStyle,
  fileNameStyle,
  fileNameContainerStyle,
} from "./RepoFileStyle";

const RepoFiles = ({ folder }) => {
  const [repoFiles, setRepoFiles] = useState([]);

  const handleRepoFiles = async (files) => {
    if (files.type === "dir") {
      const dataSubFiles = await fetch(files.git_url);
      const resSubFiles = await dataSubFiles.json();
      const sortSecondLevelContent = [...resSubFiles.tree].sort((a, b) => {
        return a.type < b.type ? 1 : -1;
      });
      setRepoFiles(sortSecondLevelContent);
    }
  };

  useEffect(() => {
    handleRepoFiles(folder);
  }, []);

  return (
    <>
      <Box>
        {repoFiles.map((file) => (
          <Box key={file.path}>
            <Box component="div" sx={fileContainerStyle}>
              <Box sx={fileNameContainerStyle}>
                <Typography variant="p">
                  {file.type === "tree" ? <AiFillFolderOpen /> : <AiFillFile />}
                </Typography>
                <Typography sx={fileNameStyle}>{file.path}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RepoFiles;
