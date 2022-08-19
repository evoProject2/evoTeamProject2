import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import RepoFiles from "./RepoFiles";

const RepoFolders = ({ folder }) => {
  const [showFiles, setShowFiles] = useState(false);

  const handleFlieShow = () => {
    setShowFiles((showFiles) => !showFiles);
  };

  return (
    <>
      <Box
        sx={{
          padding: "0.3rem 0",
          cursor: "pointer",
        }}
        onClick={handleFlieShow}
      >
        <Typography sx={{ fontSize: "1.125rem" }} variant="h3">
          {folder.name}
        </Typography>
        <Typography variant="p">
          {showFiles && <RepoFiles folder={folder} />}
        </Typography>
      </Box>
    </>
  );
};

export default RepoFolders;
