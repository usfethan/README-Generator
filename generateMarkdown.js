// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var yourLicense = ""
  var licenseType;
  if(licenseType === "MIT") {
    yourLicense = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }else if (licenseType === "Mozilla MPL 2.0") {
    yourLicense = "![License: Mzoilla MPL 2.0](https://img.shields.io/badge/License-Mozilla MPL 2.0-green.svg)"
  } else if (licenseType === "ISC") {
    yourLicense = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
  } else if (licenseType === "Boost 1.0") {
    yourLicense = "![License: Boost 1.0](https://img.shields.io/badge/License-Boost 1.0-lightblue.svg)"
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
  // var badge;
  // switch (license) {
  //   case  "MIT" :
  //     badge = {name: "MIT", color: "yellow"};
  //     break;
  //   case "Mozilla" :
  //     badge = {name: "Mozilla MPL 2.0", color: "green"};
  //     break;
  //   case "ISC" :
  //     badge = {name: "ISC Licence", color: "blue"};
  //       break;
  //   case "Boost 1.0" :
  //     badge = {name: "Boost 1.0", color: "lightblue"};
  //     break;
  // }
  // return "https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color}" ;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var yourLicense;
    var yourLicenseUrl;
  if(yourLicense === "MIT") {
      yourLicenseUrl = "https://choosealicense.com/licenses/${mit}/ "
  } else if (yourLicense === "Mozilla") {
    yourLicenseUrl = "https://choosealicense.com/licenses/${mozilla}/"
  } else if (yourLicense === "ISC") {
    yourLicenseUrl = "https://choosealicense.com/licenses/${isc}/"
  } else if (yourLicense === "Boost 1.0") {
    yourLicenseUrl = "https://choosealicense.com/licenses/${boost1.0}/"
  }
  return yourLicenseUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (yourLicense !== "None") {
    return (
     `## License
       Copyright ${yourLicense}. All rights reserverd.`
    )
  }
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var yourLicense = renderLicenseBadge(data.yourLicense);
  var licenseUrl = renderLicenseLink(data.license);
  return `# ${data.title}
 ${renderBadge(data.license)}

 ## Github URL
    [${data.github}](https://github.com/${data.github}/)

 ## Description
    ${data.description}

 ## Table of Contents

 *[License] (#License)
 *[Installation] (#Installation)
 *[Usage] (#Usage)
 *[Contributors] (#Contributors)
 *[Test] (#Test)

 
## License
    ${data.license} ${licenseUrl}

## Installation 
    ${data.installation}

## Usage
    ${data.usage}

## Contributors
    ${data.contributors}

## Test
    ${data.test}

`;
}

module.exports = generateMarkdown;
