const noteModel = require("../models/note.model");

const getAllNotes = (req, res, next) => {
  try {
    const notes = noteModel.getAllNotes();
    res.status(200).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    next(error);
  }
};

const getNoteById = (req, res, next) => {
  try {
    const note = noteModel.getNoteById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

const createNote = (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }
    const newNote = noteModel.createNote(title, content || "");
    res.status(201).json({
      success: true,
      data: newNote,
    });
  } catch (error) {
    next(error);
  }
};

const updateNote = (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updatedNote = noteModel.updateNote(req.params.id, title, content);
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedNote,
    });
  } catch (error) {
    next(error);
  }
};

const deleteNote = (req, res, next) => {
  try {
    const deleted = noteModel.deleteNote(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
