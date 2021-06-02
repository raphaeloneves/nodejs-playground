const chalk = require("chalk");

const error = (message) => {
  console.log(chalk.red.bold(message));
};

const info = (message) => {
  console.log(chalk.info(message));
};

const success = (message) => {
  console.log(chalk.green.bold(message));
};

module.exports = {
  error: error,
  info: info,
  success: success,
};
