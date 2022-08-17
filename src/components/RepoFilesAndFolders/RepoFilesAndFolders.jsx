import React, { useState, useEffect } from "react";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);

  const fileApi = `https://api.github.com/repos/${repo.full_name}/contents`;

  const getRepoContent = async () => {
    const data = await fetch(fileApi);
    const res = await data.json();
    console.log(res);
    if (!res.documentation_url) {
      // Fix the object problem when I have an empty repo
      setFilesAndFolder(res);
    }
  };

  useEffect(() => {
    getRepoContent();
  }, []);

  return (
    <div>
      <ul>
        {filesAndFolders.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepoFilesAndFolders;
