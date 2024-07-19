//TASK 2

import chalk from "chalk";

export const displayColorMessage = (msg) => {
  return chalk.bold(msg);
};

export const displayErrorMessage = (msg) => {
  return chalk.bold.red(msg);
};
