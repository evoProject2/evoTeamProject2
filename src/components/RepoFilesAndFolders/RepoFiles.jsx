import React, { useEffect, useState } from "react";

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
        <p key={index} style={{ backgroundColor: "red" }}>
          {file.path}
        </p>
      ))}
    </div>
  );
};

export default RepoFiles;
