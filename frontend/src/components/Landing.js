import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Landing = (props) => {

  return (
    <div className="container">
        <div className="jumbotron mt-5" style={{textAlign: "center", marginTop:"15%"}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" noWrap sx={{
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    Welcome to MovieListings
                </Typography>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:4 }}>
                <Typography variant="h5" noWrap sx={{
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    A Simple Movie Listing App
                </Typography>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:2, marginBottom:2 }}>
                <Typography variant="h6" noWrap sx={{
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    Click on the buttons below to view movies or add a movie
                </Typography>

            </Box>
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Button variant="contained" color="primary" component={Link} to="/movies" style={{marginRight:"5vh"}}>
                <Typography variant="h6" noWrap sx={{
                                mr: 1,
                                // fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    View Movies
                    </Typography>
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/addmovie">
                <Typography variant="h6" noWrap sx={{
                                mr: 1,
                                // fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    Add Movie
                </Typography>
            </Button>
            </Box>


            
        </div>
    </div>

  );
};

export default Landing;
