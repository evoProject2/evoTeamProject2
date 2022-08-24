import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const LoadinguUsers = () => {
  const theme = useTheme();

  return [...Array(8)].map((el, ind) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: "20px 0px",
        padding: "10px",
        width: "100%",
        backgroundColor: theme.palette.loading,
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
      }}
      key={`${ind}-loading`}
    >
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rounded"
        width={100}
        height={20}
        sx={{ marginLeft: "10px" }}
      />
    </Box>
  ));
};
export default LoadinguUsers;
