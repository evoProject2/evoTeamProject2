import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const userAbout = user.userAbout;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "400px",
          padding: "0 50px 0 50px",
          "@media(max-width: 560px)": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "4.5em 0",
          },
        }}
      >
        <Avatar
          src={userAbout.avatar_url}
          sx={{
            width: "300px",
            height: "300px",
            marginRight: "10px",
            "@media(max-width: 950px)": {
              width: "250px",
              height: "250px",
              marginRight: "5px",
            },
          }}
        />

        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media(max-width: 900px)": {
              minWidth: "250px",
              marginLeft: "15px",
            },
            "@media(max-width: 560px)": {
              marginTop: "2em",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              "@media(max-width: 950px)": {
                fontSize: "25px",
              },
            }}
          >
            {userAbout.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              "@media(max-width: 950px)": {
                fontSize: "20px",
              },
            }}
          >
            {"@" + userAbout.login}
          </Typography>
          <Typography
            level="h6"
            sx={{
              marginTop: "1em",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              "@media(max-width: 950px)": {
                fontSize: "15px",
              },
            }}
          >
            {userAbout.bio}
          </Typography>
        </Box>

        <Box
          sx={{ width: "30%", display: "flex", alignItems: "flex-end" }}
        ></Box>
      </Box>
    </>
  );
};
export default UserDetails;
