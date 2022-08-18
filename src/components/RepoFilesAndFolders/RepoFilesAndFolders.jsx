import React, { useState, useEffect } from "react";

const RepoFilesAndFolders = ({ repo }) => {
  const [filesAndFolders, setFilesAndFolder] = useState([]);
  console.log(repo);
  const repoContentApi = `https://api.github.com/repos/${repo.full_name}/contents`;
  // const fileApi = `https://api.github.com/repos/${repo.full_name}/contents/${repo.git_url}`;

  const getRepoContent = async () => {
    const data = await fetch(repoContentApi);
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
      <ul style={{ listStyle: "none", padding: "0" }}>
        {filesAndFolders.map((el) => (
          <li key={el.name} style={{ padding: "0.3rem 0" }}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoFilesAndFolders;
