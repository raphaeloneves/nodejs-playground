const validator = require("validator");
const logger = require("./utils/logger.js");
const repo = require("./notes-repository.js");

const uniqueness = (title) => {
  const note = repo.findNoteByTitle(title);
  if (note) {
    logger.error(
      `The title "${note.title}" has been taken. Please, choose another one.`
    );
    process.exit();
  }
};

const notEmpty = (attr, value) => {
  if (validator.isEmpty(value)) {
    logger.error(`${attr} cannot be empty`);
    process.exit();
  }
}

module.exports = {
  uniqueness: uniqueness,
  notEmpty: notEmpty,
};
