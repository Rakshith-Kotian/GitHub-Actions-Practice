const core = require('@actions/core');

try {
  // Get the input username
  const username = core.getInput('username');
  // Print a greeting message
  console.log(`Hello, ${username}! Welcome to GitHub Actions.`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`);
}


// const github = require('@actions/github) --> this also used in some custom actions..
// check all the methods available under core and github library for other uses ...( eg; core.getInput is used above to get input from workflow file.. + core.setFailed is used to fail the workflow)