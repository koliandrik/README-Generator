// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if the license is "MIT"
  if (license == "MIT") {
    // Return the MIT license badge
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "Apache") {
    // Check if the license is "Apache"
    // Return the Apache license badge
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GPL") {
    // Check if the license is "GPL"
    // Return the GPL license badge
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "BSD") {
    // Check if the license is "BSD"
    // Return the BSD license badge
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    // If there is no license, return an empty string
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check the license type
  if (license == "MIT") {
    // Return the MIT license link
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (license == "Apache") {
    // Return the Apache license link
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GPL") {
    // Return the GPL license link
    return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "BSD") {
    // Return the BSD license link
    return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    // If there is no license, return an empty string
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check the license type
  if (license == "MIT") {
    // Return the MIT license section
    return `This project is licensed under the MIT license.`
  } else if (license == "Apache") {
    // Return the Apache license section
    return `This project is licensed under the Apache license.`
  } else if (license == "GPL") {
    // Return the GPL license section
    return `This project is licensed under the GPL license.`
  } else if (license == "BSD") {
    // Return the BSD license section
    return `This project is licensed under the BSD license.`
  } else {
    // If there is no license, return an empty string
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Return the generated markdown for the README
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
    ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
    ${data.contribution}
  ## Tests
    ${data.test}
  ## Questions
  If you have any questions, you can reach me at [${data.email}](mailto:${data.email}) or on GitHub [here](https://github.com/${data.username})
`;}

// Export the generateMarkdown function
module.exports = generateMarkdown;
