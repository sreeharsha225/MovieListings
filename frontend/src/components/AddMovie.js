import React from 'react';
import { useNavigate } from "react-router";

import { Box, Button, Stack,TextField , Container,Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const AddMovie = (props) => {

    const [name, setname] = React.useState("");
    const [year, setYear] = React.useState("");
    const [description, setdescription] = React.useState("");

    const handlenameChange = (event) => {
        setname(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handledescriptionChange = (event) => {
        setdescription(event.target.value);
    };
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const movie = {
            name: name,
            year: year,
            description: description
        };
        console.log(movie);
        axios.post('http://localhost:5000/api/movies/', movie)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setname("");
        setYear("");
        setdescription("");
        navigate('/movies', { replace: true });
        
    };


    const handleCancel = (event) => {
        event.preventDefault();
        setname("");
        setYear("");
        setdescription("");
    };




  return (
    <Container component="main" maxWidth="xl">
            
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" noWrap sx={{
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                    Add a Movie
                </Typography>

            </Box>

            
            <Box component="form"  sx={{ mt: 3, width: "50%", display:"flex" , flexDirection:"column"}}>
                <Stack spacing={2}>
                    <TextField
                        required={true}
                        id="outlined-required"
                        label="Movie Name"
                        value={name}
                        onChange={handlenameChange}
                        fullWidth
                        type='text'
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Year"
                        value={year}
                        onChange={handleYearChange}
                        fullWidth
                        type='number'
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        value={description}
                        onChange={handledescriptionChange}
                        fullWidth
                        multiline
                        rows={6}
                        type='text'
                    />
                    </Stack>

                    <Grid container spacing={2} sx={{  display:"flex" , flexDirection:"row", justifyContent:"center"}}>
                        <Grid item xs={3}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                // component={Link} to="/movies"
                                onClick={handleSubmit}
                            >
                                AddMovie
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                // component={Link} to="/movies"
                                onClick={handleCancel}

                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>



            </Box>


        </Box>

    </Container>
  );
};

export default AddMovie;
