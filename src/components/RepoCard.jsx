import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import LanguagesBar from "./LanguagesBar/LanguagesBar";
import { useSelector } from "react-redux";

export default function RepoCard({ repo }) {
  const colors = useSelector((state) => state.github.colors);
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
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {Object.keys(repo.languages).map((lang, index) => (
          <Chip
            key={`${lang}-${index}`}
            label={lang}
            size="small"
            sx={{ margin: "0px 5px" }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        {Object.keys(colors).length > 0 && (
          <LanguagesBar
            key={repo.name + 1}
            colors={colors}
            languages={repo.languages}
            sum={repo.total_rows_from_languages}
            repoName={repo?.name}
          />
        )}
      </Box>
    </Card>
  );
}
