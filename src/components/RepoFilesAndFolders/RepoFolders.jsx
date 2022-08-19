import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import RepoFiles from "./RepoFiles";
import { AiFillFolderOpen, AiFillFile } from "react-icons/ai";

const RepoFolders = ({ folder }) => {
  const [showFiles, setShowFiles] = useState(false);

  const handleFlieShow = () => {
    setShowFiles((showFiles) => !showFiles);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          padding: "0.3rem 0",
          cursor: "pointer",
          display: "flex",
        }}
        onClick={handleFlieShow}
      >
        <Typography variant="p">
          {folder.type === "dir" ? <AiFillFolderOpen /> : <AiFillFile />}
        </Typography>
        <Typography sx={{ fontSize: "1.125rem" }} variant="h3">
          {folder.name}
        </Typography>
      </Box>
      <Typography variant="p">
        {showFiles && <RepoFiles folder={folder} />}
      </Typography>
    </Box>
  );
};

export default RepoFolders;
