import React from 'react';
import { Grid,Typography } from '@mui/material';

function Footer(props) {
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Typography variant="h7" component="h2">
                    Team 3 :
                </Typography>;
            </Grid>
            <Grid item xs={9}>
                <Typography variant="h7" component="h2">
                    BinhNNT
                </Typography>;
                <Typography variant="h7" component="h2">
                    DaiTL
                </Typography>;
                <Typography variant="h7" component="h2">
                    HuyNT42
                </Typography>;
            </Grid>
        </Grid>
        </>
    );
}

export default Footer;