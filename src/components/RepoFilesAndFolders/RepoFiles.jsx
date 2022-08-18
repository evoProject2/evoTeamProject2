import React, { useEffect, useState } from "react";

const RepoFiles = ({ filesAndFolders }) => {
  const [repoFiles, setRepoFiles] = useState(filesAndFolders);

  const handleRepoFiles = async (el) => {
    // console.log("Click on folder", el);
    const dataSubFiles = await fetch(el.git_url);
    const resSubFiles = await dataSubFiles.json();

    console.log(resSubFiles.tree, "here");
    setRepoFiles(resSubFiles.tree);
  };

  useEffect(() => {
    handleRepoFiles();
  }, []);

  return (
    <div>
      {repoFiles.map((file) => (
        <p>{file.path}</p>
      ))}
    </div>
  );
};

export default RepoFiles;
