import { Box } from "@mui/material";
import { Fragment } from "react";

const Body = ({ children }) => {
    return (
        <Fragment>
            <Box sx={{ bgcolor: '#304999', minHeight: '100vh' }}>
                {children}
            </Box>
        </Fragment>
    )
}

export default Body;