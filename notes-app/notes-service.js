const repo = require("./notes-repository.js");
const logger = require("./utils/logger.js");
const noteValidator = require("./notes-validator.js");

const addNote = (title, body) => {
  const note = {
    title: title,
    body: body,
  };
  validate(note);
  repo.saveNote(note);
};

const removeNote = (title) => {
  const existingNote = repo.findNoteByTitle(title);
  if (existingNote) {
    repo.removeNote(title);
  } else {
    logger.error("Note not found");
    return;
  }
};

const readNote = (title) => {
  const note = repo.findNoteByTitle(title);
  if (!note) {
    logger.error("Note not found");
    return;
  }
  console.log(`Title: ${note.title}, Description: ${note.body}`);
};

const listNotes = () => {
  const notes = repo.loadNotes();
  if (notes.length > 0) {
    for (const note of repo.loadNotes()) {
      console.log(`Title: ${note.title}. Description: ${note.body}`);
    }
  } else {
    logger.info("Nothing to list.");
  }
};

const validate = (note) => {
  noteValidator.uniqueness(note.title);
  Object.keys(note).forEach((k, _) => {
    // all the keys are mandatory
    noteValidator.notEmpty(k, note[k]);
  });
};

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote,
};
