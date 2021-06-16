function generateMarkdown(userResponses, userInfo) {

  let tableOC = `## Table of Contents`;

  if (userResponses.installation !== '') { tableOC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { tableOC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { tableOC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { tableOC += `
  * [tests](#tests)` };

  // create title and description
  //generate badges
  let draftReadMe = 
  `# ${userResponses.title}
  ![badge](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor)
  
  
  ## DESCRIPTION 
  
  ${userResponses.description}
  `

  draftReadMe += tableOC;

  draftReadMe += `
  * [license](#license)`;

  if (userResponses.installation !== '') {

    draftReadMe +=`
    
    ## INSTALLATION 
    
    ${userResponses.installation}`
  };

  if (userResponses.usage !== '') {

    draftReadMe +=`
    
    ## USAGE
    
    ${userResponses.usage}`
  };

  if (userResponses.contributing !== '') {`
  
    ##CONTRIBUTING 
  
  ${userResponses.contributing}`
  };

  if (userResponses.tests !== '') {
    draftReadMe +=`
    
    ## TESTS
    
    ${userResponses.tests}`
  };

  // connect userResponses to license section
  draftReadMe +=`
  
    ## LICENSE
  
  ${userResponses.license}`;

  // Questions? section
  let draftDeveloper = `
  
  ---------------------
  
    ## Questions?
  
  For any questions, please contact me with the information below:
  
  Github: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {
    draftDeveloper += `
    Email: ${userInfo.email}`
  };

  // add developer section to readne
  draftReadMe += draftDeveloper;

  return draftReadMe;

}

module.exports = generateMarkdown;
