import React, { useState } from 'react';
import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';

const AddMovies = () => {
  const [inpt, setInpt] = useState({
    moviename: '',
    actor: '',
    actres: '',
    director: '',
    releasedyear: '',
    camera: '',
    producer: '',
    language: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInpt((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3600/api/addMovie', inpt);
      alert('Movie added successfully');

      setInpt({
        moviename: '',
        actor: '',
        actres: '',
        director: '',
        releasedyear: '',
        camera: '',
        producer: '',
        language: ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ paddingTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignSelf="center"
          marginLeft="auto"
          marginRight="auto"
          marginTop={8}
        >
          {/* <FormLabel>Movie Name</FormLabel> */}
          <TextField
            label={<FormLabel>Movie Name</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="moviename"
            onChange={handleChange}
            value={inpt.moviename}
          />

         
          <TextField
            label={ <FormLabel>Actor</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="actor"
            onChange={handleChange}
            value={inpt.actor}
          />

          
          <TextField
            label={<FormLabel>Actress</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="actres"
            onChange={handleChange}
            value={inpt.actres}
          />

          
          <TextField
            label={<FormLabel>Director</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="director"
            onChange={handleChange}
            value={inpt.director}
          />

          <FormLabel style={{paddingRight:'550px',paddingTop:'20px',fontWeight:'bold'}}>Released Year</FormLabel>
          <TextField
            
            margin="normal"
            type="date"
            fullWidth
            variant="outlined"
            name="releasedyear"
            onChange={handleChange}
            value={inpt.releasedyear}
          />

          
          <TextField

            label={<FormLabel>Camera</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="camera"
            onChange={handleChange}
            value={inpt.camera}
          />

          
          <TextField
            label={<FormLabel>Producer</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="producer"
            onChange={handleChange}
            value={inpt.producer}
          />

          
          <TextField
            label={<FormLabel>Language</FormLabel>}
            margin="normal"
            fullWidth
            variant="outlined"
            name="language"
            onChange={handleChange}
            value={inpt.language}
          />

          <Button type="submit" variant="contained">
            Add
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovies;
