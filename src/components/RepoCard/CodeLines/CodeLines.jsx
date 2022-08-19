import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {getCodeLinesColor} from "./codeLineFunctions";

export default function CodeLines({count}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'right',
                color: getCodeLinesColor(count)
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'WireOne',
                    fontWeight: 1000,
                    letterSpacing: 2,
                    fontSize: '1.3rem',
                    lineHeight: 1.4

                }}
            >
                {count}
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'WireOne',
                    fontSize: '1.15rem',
                    lineHeight: 0.4,
                    minWidth: '45px'
                }}
            >
                code lines
            </Typography>
        </Box>
    )
}


