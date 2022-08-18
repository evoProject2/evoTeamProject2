import { useSelector } from "react-redux";
import { useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const userAbout = user.userAbout;

  useEffect(() => {
    // console.log(userAbout);
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Avatar
          src={userAbout.avatar_url}
          sx={{
            height: "300px",
            width: "300px",
            outline: "3px solid #fff",
          }}
        />

        <Box
          sx={{
            marginLeft: "2em",
            marginTop: "2em",
          }}
        >
          <Typography level="h4">
            {userAbout.name}
            <Typography variant="soft" level="h6" ml="0.5em">
              {userAbout.login}
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "300px", marginLeft: "2em", marginTop: "1em" }}>
          <Typography level="h6">{userAbout.bio}</Typography>
        </Box>
      </Box>
    </>
  );
};
export default UserDetails;
