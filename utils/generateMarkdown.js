// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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

  ${renderLicenseLink(data.licenseSelection)}

  ##Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, please contact me at ${data.email} or at ${data.github}.
`;
}

module.exports = generateMarkdown;
