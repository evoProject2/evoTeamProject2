import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import LanguagesBar from "./LanguagesBar/LanguagesBar";
import { useSelector } from "react-redux";
import RepoFilesAndFolders from "./RepoFilesAndFolders/RepoFilesAndFolders";
import { useState } from "react";
import "../fonts.css";
import "./RepoCard.css";

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
    const getCodeLinesColor = (rowsCount) => {
        const MAX_CODE_LINES = 100000
        rowsCount = Math.max(Math.min(MAX_CODE_LINES,rowsCount), 1)
        function scale (number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }
        let value = scale(rowsCount, 0, MAX_CODE_LINES, 0, 510)
        let red = 16
        let green = 16
        let blue = 16

        if (value < 255) {
            red = 255
            green = Math.sqrt(value)
            green = Math.round(green*16)
        } else {
            green = 255
            value = value - 255
            red = 256 - (value*value / 255)
            red = Math.round(red)
        }


        green = green.toString(16)
        red = red.toString(16)
        blue = blue.toString(16)

        green = green.length>1 ? green : '0'+green
        red = red.length>1 ? red : '0'+red
        blue = blue.length>1 ? blue : '0'+blue

        let color = '#' + red + green + blue
        console.table({rowsCount,value,red,green,blue, color})
        return color
    }

    return (
        <Card
            className={"repo-card"}
            sx={{
                position: 'relative',
                display: "flex",
                flexDirection: "column",
                m: "10px 0px",
                p: 2,
                maxWidth: "400px",
                minHeight: "200px",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant="h5"
                    mb="15px"
                    sx={{cursor: "pointer"}}
                    onClick={handleShowComponet}
                >
                    {repo?.name}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'right',
                        color:getCodeLinesColor(repo?.total_rows_from_languages)
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'WireOne',
                            fontWeight: 1000,
                            letterSpacing: 2,
                            fontSize: '1.3rem',
                            lineHeight:1.4

                        }}
                    >
                        {repo?.total_rows_from_languages}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'WireOne',
                            fontSize: '1.15rem',
                            lineHeight: 0.4,
                            minWidth:'45px'
                        }}
                    >
                        code lines
                    </Typography>
                </Box>
            </Box>

            <Box>{showComponent && <RepoFilesAndFolders repo={repo}/>}</Box>
            <Box sx={{display: "flex", flexDirection: "row"}}>
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
