import "./LanguageBar.css";
import {Box, Tooltip} from "@mui/material";

export const LanguagesBar = ({languages, sum, colors, repoName}) => {
    return (
        Object.keys(languages).length > 0 && (
            <Box
                key={repoName + "lang"}
                className={"language-bar-component-container"}
            >
                <Box className={"language-bar-title"}>Languages</Box>
                <Box className={"language-bar-container"}>
                    {Object.keys(languages).map((language) => (
                        <Tooltip
                            key={repoName + "%" + language}
                            sx={{backgroundColor: "white",
                                color: 'rgba(0, 0, 0, 0.87)'}}
                            arrow
                            placement="top"
                            title={
                                <Box
                                    // key={repoName + "%" + language}
                                    className={"language-bar-percentages-row"}
                                >
                                    <Box
                                        className={"language-circle"}
                                        style={{backgroundColor: colors[language].color}}
                                    />
                                    <Box className={"language-name"}> {language} </Box>
                                    <Box className={"language-percentage"}>
                                        {`${((languages[language] / sum) * 100).toFixed(1)}%`}
                                    </Box>
                                </Box>
                            }
                        >

                            <Box
                                key={repoName + "bar" + language}
                                className={"language-segment"}
                                style={{
                                    width: `${(languages[language] / sum) * 100 + 3}%`,
                                    backgroundColor: colors[language].color,
                                }}
                            />
                        </Tooltip>
                    ))}
                </Box>

                <Box className={"language-bar-percentages-container"}>
                    {Object.keys(languages).map((language) => (
                        <Box
                            key={repoName + "%" + language}
                            className={"language-bar-percentages-row"}
                        >
                            <Box
                                className={"language-circle"}
                                style={{backgroundColor: colors[language].color}}
                            />
                            <Box className={"language-name"}> {language} </Box>
                            <Box className={"language-percentage"}>
                                {`${((languages[language] / sum) * 100).toFixed(1)}%`}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        )
    );
};

export default LanguagesBar;
