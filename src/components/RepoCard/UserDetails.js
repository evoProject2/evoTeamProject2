import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FilterBar from "../FilterBar/FilterBar";

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
        }}
      >
        <Avatar
          src={userAbout.avatar_url}
          circle
          sx={{
            width: "300px",
            height: "300px",
            outline: "3px solid #fff",
          }}
        />

        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">{userAbout.name}</Typography>
          <Typography variant="h6" sx={{ color: "#ffffff77" }}>
            {"@" + userAbout.login}
          </Typography>
          <Typography
            level="h6"
            sx={{
              marginTop: "1em",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {userAbout.bio}
          </Typography>
        </Box>

        <Box sx={{ width: "30%", display: "flex", alignItems: "flex-end" }}>
          <FilterBar />
        </Box>
      </Box>
    </>
  );
};
export default UserDetails;
