// funtion to take the license selection of the data and render a badge/link based on user selection
function renderLicenseBadge(data) {
  if (data.license === "MIT License") {
    return `
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
  `;
  }
  
  if (data.license === "Apache License 2.0"){
  return`
  [![Apache license](https://img.shields.io/badge/license-Apache%20License%202.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)
  `;
  }

  if (data.license === "BSD 3-Clause 'New' or 'Revised' license"){
    return `
    [![BSD license](https://img.shields.io/badge/license-BSD%203--Clause%20'New'%20or%20'Revised'%20license-blue)](https://opensource.org/licenses/BSD-3-Clause)
    `;
  }

  if (data.license === "GNU General Public License (GPL)"){
    return `
    [![GPL license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20(GPL)-blue)](https://www.gnu.org/licenses/gpl-3.0.en.html)
    `;
  }
};



function instContent(data) {
  if (!data.inst) {
    return '';
  }

  return `* [Installation](#installation)  `
};

function usageContent(data) {
  if (!data.usage) {
    return '';
  }

  return `* [Usage](#usage)  `
};

function distGuideContent(data) {
  if (!data.distGuide) {
    return '';
  }

  return `* [Distribution](#distribution)  
      `
};

function licenseContent(data) {
  if (!data.license) {
    return '';
  }

  return `* [License](#license)  
      `
};

function testInstContent(data) {
  if (!data.testInst) {
    return '';
  }

  return `* [Test-Instructions](#test-instructions)  
      `
};

function generateInst(data) {
  if (!data.inst) {
    console.log("No Installation Instructions");
    return '';
  }

  return `
  ## Installation 
  ${data.inst}
    `
};

function generateUsage(data) {
  if (!data.usage) {
    console.log("No Usage Instructions");
    return '';
  }

  return `
  ## Usage Instructions  
  ${data.usage}
    `
};

function generateDistGuide(data) {
  if (!data.distGuide) {
    console.log("No Distribution Guidelines");
    return '';
  }

  return `
  ## Distribution  
  ${data.distGuide}
    `
};

function generateLicense(data) {
  if (!data.license) {
    console.log("No License Information");
    return '';
  }

  return `
  ## License  
  For use with ${data.license} restrictions.
    `
};

function generateTestInst(data) {
  if (!data.testInst) {
    console.log("No Test Instructions");
    return '';
  }

  return `
  ## Test-Instructions  
  ${data.testInst}
    `
};

module.exports = data => {
  const {
    name,
    email,
    gitName,
    title,
    desc,
    inst,
    usage,
    distGuide,
    license,
    testInst
  } = data;
  return `
  # ${data.title}, a project by ${data.name} ${renderLicenseBadge(data)} 
  **Email:** ${data.email}  
  **GitHub:** ${data.gitName}  

  ## Table of Contents  
  * [Description](#description)  
  ${instContent(data)}  

  ${usageContent(data)}  

  ${distGuideContent(data)}  

  ${licenseContent(data)}  

  ${testInstContent(data)}  

  ## Description
  ${data.desc}  

  ${generateInst(data)}  

  ${generateUsage(data)}  

  ${generateDistGuide(data)}  

  ${generateLicense(data)}  

  ${generateTestInst(data)}  
  
`;
};
