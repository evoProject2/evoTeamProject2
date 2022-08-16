import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

export default function RepoCard({ repo }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "10px 0px",
        p: 2,
        minWidth: "500px",
      }}
    >
      <Typography variant="h5" mb="15px">
        {repo?.name}
      </Typography>
      {/* TODO: Add multiple-colored progress bar here */}
      <Box sx={{ display: "flex", flexDirectionl: "row" }}>
        {Object.keys(repo.languages).map((lang, index) => (
          <Chip
            key={`${lang}-${index}`}
            label={lang}
            size="small"
            sx={{ margin: "0px 5px" }}
          />
        ))}
      </Box>
    </Card>
  );
}
