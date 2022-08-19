import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import RepoFiles from "./RepoFiles";
import { AiFillFolderOpen, AiFillFile } from "react-icons/ai";
import {
  folderStyle,
  folderContainerStyle,
  folderNameStyle,
} from "./RepoFolderStyle";

const RepoFolders = ({ folder }) => {
  const [showFiles, setShowFiles] = useState(false);

  const handleFlieShow = () => {
    setShowFiles((showFiles) => !showFiles);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={folderContainerStyle} onClick={handleFlieShow}>
        <Box sx={folderStyle}>
          <Typography variant="p">
            {folder.type === "dir" ? <AiFillFolderOpen /> : <AiFillFile />}
          </Typography>
          <Typography sx={folderNameStyle} variant="h3">
            {folder.name}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ fontSize: "1.125rem" }}>
        {showFiles && <RepoFiles folder={folder} />}
      </Box>
    </Box>
  );
};

export default RepoFolders;
