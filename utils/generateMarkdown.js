// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "APACHE 2.0":
      return "![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)";
      break;
    case "GPL 3.0":
      return "![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-green.svg)";
      break;
    case "BSD 3":
      return "![License: BSD 3](https://img.shields.io/badge/License-BSD%203-Clause-blue.svg)";
      break;
    case "None":
      return "";
      break;
    default:
      "";
      break;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      return "[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-green.svg)](https://opensource.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      return "";
      break;
    default:
      "";
      break;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return "";
  } else {
    return `This project is covered under ${license}
    ${renderLicenseLink(license)}`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.licenseSelection)}
  
  # ${data.title}

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

  ${renderLicenseSection(data.licenseSelection)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, please contact me at ${data.email} or at https://github.com/${data.github}.`;
}

module.exports = generateMarkdown;
