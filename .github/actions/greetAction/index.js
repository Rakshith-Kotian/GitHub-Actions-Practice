const core = require('@actions/core');

try {
  // Get the input username
  const username = core.getInput('username');
  // Print a greeting message
  console.log(`Hello, ${username}! Welcome to GitHub Actions.`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`);
}
