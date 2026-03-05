const express = require('express');
const router = express.Router();

const getNotes = (req, res) => {
    res.json({message: "Get all notes"});
};

const createNote = (req, res) => {
    res.json({message: "Create a new note"});
};

const getNoteById = (req, res) => {
    res.json({message: `Get note ${req.params.id}`});
};

const updateNote = (req, res) => {
    res.json({message: `Update note ${req.params.id}`});
};

const deleteNote = (req, res) => {
    res.json({message: `Delete note ${req.params.id}`});
};

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;