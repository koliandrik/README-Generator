// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache") {
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPL") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (license === "BSD") {
        return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "[MIT](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
        return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL") {
        return "[GPL](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD") {
        return "[BSD](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
      ${renderLicenseBadge(license)}
      This project is licensed under the ${renderLicenseLink(license)} license.`;
    }
}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}) or visit my [GitHub Profile]() at [${data.github}]()`;
}

module.exports = generateMarkdown;
