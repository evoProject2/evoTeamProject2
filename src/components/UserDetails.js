import { useSelector } from "react-redux";
import { useEffect } from "react";
import RepoCard from "../components/RepoCard";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const userAbout = user.userAbout;

  useEffect(() => {
    console.log(userAbout);
  }, []);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
      <Avatar></Avatar>
    </Box>
  );
};
export default UserDetails;
