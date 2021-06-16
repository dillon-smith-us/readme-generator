function generateMarkdown(userAnswers, userInfo) {

  let tableOC = `## Table of Contents`;

  if (userAnswers.installation !== '') { tableOC += `
  * [Installation](#installation)` };

  if (userAnswers.usage !== '') { tableOC += `
  * [Usage](#usage)` };

  if (userAnswers.contributing !== '') { tableOC += `
  * [Contributing](#contributing)` };

  if (userAnswers.tests !== '') { tableOC += `
  * [tests](#tests)` };

  // create title and description
  //generate badges
  let draftReadMe = 
  `# ${userAnswers.title}
  ![badge](https://img.shields.io/github/languages/top/${userAnswers.username}/${userAnswers.repository}?style=flat&logo=appveyor)
  
  
  ## DESCRIPTION 
  
  ${userAnswers.description}
  `

  draftReadMe += tableOC;

  draftReadMe += `
  * [license](#license)`;

  if (userAnswers.installation !== '') {

    draftReadMe +=`
    
    ## INSTALLATION 
    
    ${userAnswers.installation}`
  };

  if (userAnswers.usage !== '') {

    draftReadMe +=`
    
    ## USAGE
    
    ${userAnswers.usage}`
  };

  if (userAnswers.contributing !== '') {`
  
    ##CONTRIBUTING 
  
  ${userAnswers.contributing}`
  };

  if (userAnswers.tests !== '') {
    draftReadMe +=`
    
    ## TESTS
    
    ${userAnswers.tests}`
  };

  // connect userAnswers to license section
  draftReadMe +=`
  
    ## LICENSE
  
  ${userAnswers.license}`;

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
