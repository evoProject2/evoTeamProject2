import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { AiFillFolderOpen, AiFillFile } from "react-icons/ai";

const RepoFiles = ({ folder }) => {
  const [repoFiles, setRepoFiles] = useState([{ ...folder }]);

  const handleRepoFiles = async (files) => {
    const dataSubFiles = await fetch(files.git_url);
    const resSubFiles = await dataSubFiles.json();
    setRepoFiles(resSubFiles.tree);
  };

  useEffect(() => {
    handleRepoFiles(folder);
  }, []);

  return (
    <div>
      {repoFiles.map((file, index) => (
        <>
          <Typography variant="p">
            {folder.type === "dir" ? <AiFillFolderOpen /> : <AiFillFile />}
          </Typography>
          <p key={index} style={{ backgroundColor: "red", margin: ".75rem 0" }}>
            {file.path}
          </p>
        </>
      ))}
    </div>
  );
};

export default RepoFiles;
