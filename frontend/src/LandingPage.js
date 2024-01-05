import * as React from 'react';
import Typography from "@mui/material/Typography";
import image from "./images/SophiaKimProfilePic.jpg"
import {ThemeProvider} from "@mui/material";
import Box from './Box'

function LandingPage() {
    return (
        <Box>
            Hello, my name is Sophia
        </Box>
        // <Typography
        //     sx={{
        //         mr: 2,
        //         display: { xs: 'none', md: 'flex' },
        //         fontFamily: font,
        //         fontWeight: 700,
        //         fontSize: '50px'
        //         }}
        // >
        //     Hello, my name is Sophia
        // </Typography>

    );
}

export default LandingPage;