// import React from 'react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, TextField } from '@mui/material';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  var navigate = useNavigate();
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingData, setEditingData] = useState({
    moviename: '',
    actor: '',
    actres: '',
    director: '',
    releasedyear: '',
    camera: '',
    producer: '',
    language: ''
  });

  useEffect(() => {
    axios.get("http://localhost:3600/api/viewmovie")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleEditClick = (val) => {
    setEditingData({
      _id: val._id,
      moviename: val.moviename,
      actor: val.actor,
      actres: val.actres,
      director: val.director,
      releasedyear: val.releasedyear,
      camera: val.camera,
      producer: val.producer,
      language: val.language
    });
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleUpdate = async () => {
    console.log("Clicked");
    try {
      await axios.put(`http://localhost:3600/api/updateMovie/${editingData._id}`, editingData);
      alert('Movie updated successfully');
      setOpenDialog(false);
      navigate('/')
      window.location.reload(false)
      setEditingData({
        _id: '',
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
  }

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3600/api/deleteMovie/${id}`);
      alert('Movie deleted successfully');
      window.location.reload(false)
      // fetchData(); // Reload the data after deletion
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell align="right">Movie name</StyledTableCell>
              <StyledTableCell align="right">Actor</StyledTableCell>
              <StyledTableCell align="right">Actress</StyledTableCell>
              <StyledTableCell align="right">Directors</StyledTableCell>
              <StyledTableCell align="right">Released Year</StyledTableCell>
              <StyledTableCell align="right">Camera</StyledTableCell>
              <StyledTableCell align="right">Producer</StyledTableCell>
              <StyledTableCell align="right">Language</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, i) => {
              return (
                <StyledTableRow key={val._id} >

                  <StyledTableCell align="right">{val.moviename}</StyledTableCell>
                  <StyledTableCell align="right">{val.actor}</StyledTableCell>
                  <StyledTableCell align="right">{val.actres}</StyledTableCell>
                  <StyledTableCell align="right">{val.director}</StyledTableCell>
                  <StyledTableCell align="right">{val.releasedyear}</StyledTableCell>
                  <StyledTableCell align="right">{val.camera}</StyledTableCell>
                  <StyledTableCell align="right">{val.producer}</StyledTableCell>
                  <StyledTableCell align="right">{val.language}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button  color='primary' onClick={() => handleEditClick(val)}>Edit</Button><br />
                    <Button  color='error' onClick={()=>handleDeleteClick(val._id)} >Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Movie Details</DialogTitle>
        <DialogContent>
          <FormLabel>Movie Name</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="moviename"
            onChange={handleChange}
            value={editingData.moviename}
          />

          <FormLabel>Actor</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="actor"
            onChange={handleChange}
            value={editingData.actor}
          />

          <FormLabel>Actress</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="actres"
            onChange={handleChange}
            value={editingData.actres}
          />

          <FormLabel>Director</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="director"
            onChange={handleChange}
            value={editingData.director}
          />

          <FormLabel>Released Year</FormLabel>
          <TextField
            margin="normal"
            type="date"
            fullWidth
            variant="outlined"
            name="releasedyear"
            onChange={handleChange}
            value={editingData.releasedyear}
          />

          <FormLabel>Camera</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="camera"
            onChange={handleChange}
            value={editingData.camera}
          />

          <FormLabel>Producer</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="producer"
            onChange={handleChange}
            value={editingData.producer}
          />

          <FormLabel>Language</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="language"
            onChange={handleChange}
            value={editingData.language}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Home;
