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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
            // marginLeft: "2em",
            marginTop: "2em",
          }}
        >
          <Typography variant="h4">
            {userAbout.name}
            <Typography variant="h5">{userAbout.login}</Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "300px",
            marginTop: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography level="h6">{userAbout.bio}</Typography>
        </Box>
      </Box>
    </>
  );
};
export default UserDetails;
