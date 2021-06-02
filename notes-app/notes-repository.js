const fs = require("fs");
const logger = require("./utils/logger.js");
const FILE_PATH = "notes.json";

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync(FILE_PATH);
    const notes = JSON.parse(notesBuffer.toString());
    return notes.slice();
  } catch (error) {
    const initialList = [];
    logger.info("File not found. Creating new file sample.");
    saveFile(initialList);
    return initialList;
  }
};

const saveNote = (note) => {
  const notes = loadNotes();
  notes.push(note);
  saveFile(notes);
};

const removeNote = (title) => {
  const notesToKeep = loadNotes().filter(
    (n) => n.title.toLowerCase() !== title.toLowerCase()
  );
  saveFile(notesToKeep);
};

const saveFile = (notes) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notes));
  logger.success("Saved..");
};

const findNoteByTitle = (noteTitle) => {
  return loadNotes().find(
    (n) => n.title.toLowerCase() === noteTitle.toLowerCase()
  );
};

module.exports = {
  loadNotes: loadNotes,
  saveNote: saveNote,
  removeNote: removeNote,
  findNoteByTitle: findNoteByTitle,
};
