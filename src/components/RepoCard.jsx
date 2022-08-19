import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import LanguagesBar from "./LanguagesBar/LanguagesBar";
import { useSelector } from "react-redux";
import RepoFilesAndFolders from "./RepoFilesAndFolders/RepoFilesAndFolders";
import { useState } from "react";

export default function RepoCard({ repo }) {
  const [showComponent, setShowComponet] = useState(false);
  const colors = useSelector((state) => state.github.colors);

  const handleShowComponet = () => {
    setShowComponet((showComponent) => !showComponent);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "10px 0px",
        p: 2,
        maxWidth: "500px",
        minHeight: "200px",
      }}
    >
      <Typography
        variant="h5"
        mb="15px"
        sx={{ cursor: "pointer" }}
        onClick={handleShowComponet}
      >
        {repo?.name}
      </Typography>
      <Box>{showComponent && <RepoFilesAndFolders repo={repo} />}</Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* {Object.keys(repo.languages).map((lang, index) => (
          <Chip
            key={`${lang}-${index}`}
            label={lang}
            size="small"
            sx={{ margin: "0px 5px" }}
          />
        ))} */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
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
