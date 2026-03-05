const generateId = require("../utils/generateId");

let notes = [];

const getAllNotes = () => {
  return notes;
};

const getNoteById = (id) => {
  return notes.find((note) => note.id === id);
};

const createNote = (title, content) => {
  const newNote = {
    id: generateId(),
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  notes.push(newNote);
  return newNote;
};

const updateNote = (id, title, content) => {
  const note = notes.find((note) => note.id === id);
  if (!note) return null;

  note.title = title !== undefined ? title : note.title;
  note.content = content !== undefined ? content : note.content;
  note.updatedAt = new Date().toISOString();

  return note;
};

const deleteNote = (id) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) return false;

  notes.splice(index, 1);
  return true;
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
