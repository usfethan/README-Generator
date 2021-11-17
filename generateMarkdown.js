// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  var licenseType;
  if(licenseType === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }else if (licenseType === "Mozilla MPL 2.0") {
    badge = "![License: Mzoilla MPL 2.0](https://img.shields.io/badge/License-Mozilla MPL 2.0-green.svg)"
  } else if (licenseType === "ISC") {
    badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
  } else if (licenseType === "Boost 1.0") {
    badge = "![License: Boost 1.0](https://img.shields.io/badge/License-Boost 1.0-lightblue.svg)"
  } else {
    badge = "N/A"
  }
  return `https://img.shields.io/static/v1?label=license-&meassage=${badge}&color=${licenseType})`;
 
}

// // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
function renderLicenseLink(licenseBadge) {
    var badge;
    var licenseUrl;
  if(badge === "MIT") {
    licenseUrl = "mit"
  } else if (badge === "Mozilla") {
    licenseUrl = "mpl-2.0"
  } else if (badge === "ISC") {
    licenseUrl = "isc"
  } else if (badge === "Boost 1.0") {
    licenseUrl = "boost 1.0"
  }
  return `https://choosealicense.com/licenses/${licenseUrl}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseUrl !== "None") {
    return (
     `## License
       Copyright ${data.licenseUrl}. All rights reserverd.`
    )
  }
  return;
}

// TODO: Create a function to generate markdown for README ${renderBadge(data.license)}

function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  // var yourLicenseUrl = renderLicenseLink(data.license);
  
  return `## ${data.title}

  ## License: [${data.licenseBadge}] 

  ## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Info](#information)

 ## Description
 ${data.description}
 
## Installation 
${data.installation}

## Usage
    ${data.usage}

## Info
    Github: [${data.github}](https://github.com/${data.github}/)
    Email: ${data.email}
`;

}

module.exports = generateMarkdown;
