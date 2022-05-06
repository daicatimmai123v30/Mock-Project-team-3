import React from 'react';
import { Grid,Typography,Box,Container } from '@mui/material';

function Footer(props) {
    return (
            <Box sx={{ bgcolor:'#9c27b0', pt: 2}} >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>Contact</Box>
                            <Box>Support</Box>
                            <Box>Privacy</Box>   
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>More</Box>
                            <Box>FB</Box>
                            <Box>YTB</Box>
                            <Box>INS</Box>   
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Team3</Box>
                            <Box>Dai</Box>
                            <Box>Binh</Box>
                            <Box>Huy</Box>   
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

export default Footer;