import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const IntroPage = () => {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  const handleFindButtonClicked = () => {
    navigate(`/${username}`, { replace: false });
  };

  return (
    <div className={"intro-page-container"}>
      <div> Find user repositories</div>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Username"}
        />
        <button onClick={() => handleFindButtonClicked()}> Find </button>
      </div>
    </div>
  );
};

export default IntroPage;
