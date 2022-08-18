import React, { useState } from "react";
import RepoFiles from "./RepoFiles";

const RepoFolders = ({ filesAndFolders }) => {
  const [showFiles, setShowFiles] = useState(false);

  const handleFlieShow = () => {
    setShowFiles((showFiles) => !showFiles);
    console.log("working");
  };
  return (
    <>
      {filesAndFolders.map((el) => (
        <div
          key={el.name}
          style={{ padding: "0.3rem 0", cursor: "pointer" }}
          onClick={handleFlieShow}
        >
          {el.name}
          {showFiles && <RepoFiles filesAndFolders={filesAndFolders} />}
        </div>
      ))}
    </>
  );
};

export default RepoFolders;
