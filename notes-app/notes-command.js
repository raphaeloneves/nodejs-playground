const yargs = require("yargs");
const notesService = require("./notes-service");
const noteService = require("./notes-service");

yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => noteService.addNote(argv.title, argv.body),
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      demandOption: true,
      describe: "Note title to be removed",
      type: "string",
    },
  },
  handler: (argv) => notesService.removeNote(argv.title),
});

yargs.command({
  command: "list",
  describe: "List all existing notes",
  handler: () => noteService.listNotes(),
});

yargs.command({
  command: "read",
  describe: "Read a new note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      decsribe: "Note title",
    },
  },
  handler: (argv) => noteService.readNote(argv.title),
});

yargs.parse();
