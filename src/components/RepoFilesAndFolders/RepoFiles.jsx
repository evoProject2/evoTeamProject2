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
  const [repoFiles, setRepoFiles] = useState([{ ...folder }]);

  const handleRepoFiles = async (files) => {
    const dataSubFiles = await fetch(files.git_url);
    const resSubFiles = await dataSubFiles.json();
    if (files.type === "file") {
      return;
    }
    setRepoFiles(resSubFiles.tree);
  };

  useEffect(() => {
    handleRepoFiles(folder);
  }, []);

  return (
    <div>
      {repoFiles.map((file, index) => (
        <>
          <Box sx={fileContainerStyle}>
            <Box sx={fileNameContainerStyle}>
              <Typography variant="p">
                {file.type === "tree" ? <AiFillFolderOpen /> : <AiFillFile />}
              </Typography>
              <Typography key={index} sx={fileNameStyle}>
                {file.path}
              </Typography>
            </Box>
          </Box>
        </>
      ))}
    </div>
  );
};

export default RepoFiles;
