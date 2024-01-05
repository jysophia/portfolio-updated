import { createBox, createTheme } from '@mui/system';

const font = "'Poppins', sans-serif";
const defaultTheme = createTheme({
    palette: {
        primary: '#eeaab2'
    },
    typography: {
        body1: {
            fontFamily: font
        }
    },
    custom: {
        myOwnComponent: {
            margin: '10px 10px'
        }
    }
});

const Box = createBox({ defaultTheme });

export default Box;