const router =require('express').Router();
const Movie = require('../model/model');

router.post('/api/addMovie', async (req, res) => {
    try {
      const newMovie = new Movie({
        moviename:req.body.moviename,
        actor:req.body.actor,
        actres:req.body.actres,
        director:req.body.director,
        releasedyear:req.body.releasedyear,
        camera:req.body.camera,
        producer:req.body.producer,
        language:req.body.language
      });
  
      await newMovie.save();
      res.status(200).json('Movie added successfully');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

 router.get('/api/viewmovie', async(req,res)=>{
    try{
      const Movielist = await Movie.find({});
      res.status(200).json(Movielist);
    }
    catch(err){
      res.status(500).json({error:err.message});
    }
 });

 router.put('/api/updateMovie/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedMovie = req.body;

    await Movie.findByIdAndUpdate(movieId, updatedMovie);
    res.status(200).json('Movie updated successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/api/deleteMovie/:id', async(req,res)=>{
  try{
    const movieId = req.params.id;
    await Movie.findByIdAndDelete(movieId);
    res.status(200).json('Movie Deleted Successfully');
  }
  catch(err)
  {
    res.status(500).json({error:err.message});
  }
});




  





  module.exports = router;