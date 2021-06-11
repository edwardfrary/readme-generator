// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function generateInst(data) {
  if (!data.inst) {
    console.log("No Installation Instructions");
    return '';
  }

  return `
  ## Installation Instructions  
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
  ## Distribution Guidelines  
  ${data.distGuide}
    `
};

function generateLicense(data) {
  if (!data.license) {
    console.log("No License Information");
    return '';
  }

  return `
  ## License Infromation  
  ${data.license}
    `
};

function generateTestInst(data) {
  if (!data.testInst) {
    console.log("No Test Instructions");
    return '';
  }

  return `
  ## Test Instructions  
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
  # ${data.title}, a project by ${data.name}.

  **Email:** ${data.email}  
  **GitHub:** ${data.gitName}

  ## Project Description
  ${data.desc}  

  ${generateInst(data)}  

  ${generateUsage(data)}  

  ${generateDistGuide(data)}  

  ${generateLicense(data)}  

  ${generateTestInst(data)}  
  
`;
};
