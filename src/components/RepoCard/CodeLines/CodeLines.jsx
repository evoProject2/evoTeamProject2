import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {getCodeLinesColor} from "./codeLineFunctions";
import {Tooltip} from "@mui/material";

export default function CodeLines({count}) {
    return (
        <Tooltip arrow placement='right-start' title={'Code lines'}>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "right",
                    color: getCodeLinesColor(count),
                    textShadow: '0 0 1.05px #000',
                    verticalAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "WireOne",
                        fontWeight: 1000,
                        letterSpacing: 2,
                        fontSize: "1.3rem",
                        lineHeight: 1.4,

                    }}
                >
                    {count}
                </Typography>


                <Typography
                    sx={{
                        // fontFamily: "WireOne",
                        letterSpacing: 0,
                        fontSize: "1.275rem",
                        lineHeight: 1.5,
                        // minWidth: "45px",
                    }}
                >
                    CL
                </Typography>

                {/*<Typography*/}
                {/*    sx={{*/}
                {/*        fontFamily: "WireOne",*/}
                {/*        fontSize: "1.2rem",*/}
                {/*        lineHeight: 0.4,*/}
                {/*        minWidth: "45px",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    code lines*/}
                {/*</Typography>*/}
            </Box>
        </Tooltip>
    );
}
