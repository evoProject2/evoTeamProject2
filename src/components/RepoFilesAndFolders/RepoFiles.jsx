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
      const sortFilesContent = [...resSubFiles.tree].sort((a, b) => {
        return a.type < b.type ? 1 : -1;
      });
      setRepoFiles(sortFilesContent);
    }
  };

  useEffect(() => {
    handleRepoFiles(folder);
  }, []);

  return (
    <div>
      {repoFiles.map((file) => (
        <div key={file.path}>
          <Box component="div" sx={fileContainerStyle}>
            <Box sx={fileNameContainerStyle}>
              <Typography variant="p">
                {file.type === "tree" ? <AiFillFolderOpen /> : <AiFillFile />}
              </Typography>
              <Typography sx={fileNameStyle}>{file.path}</Typography>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default RepoFiles;
