const template = (Team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="text-center m-4">
            <h1>Team Profile</h1>
        </header>

        <div class="container">
        <div class="row justify-content-center">
        ${generateTeam(Team)}
        </div>
        </div>
        </body>
      </html>
      `;
  };
  function generateTeam(Team) {
    function generateManager(manager) {
      return `<div class="col-4 p-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
              <p class="card-text">ID: ${manager.id}</p>
              <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
              <p class="card-text">Office Number: ${manager.officenumber}</p>
          </div>
      </div>
  </div>`;
    }


    





    function generateEngineer(engineer){
      return `<div class="col-4 p-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Engineer</h5>
              <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
              <p class="card-text">ID: ${engineer.id}</p>
              <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
              <p class="card-text">GitHub: ${engineer.github}</p>
          </div>
      </div>
  </div>`;
    };





    function generateIntern(intern){
      return `<div class="col-4 p-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Intern</h5>
              <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
              <p class="card-text">ID: ${intern.id}</p>
              <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
              <p class="card-text">School: ${intern.school}</p>
          </div>
      </div>
  </div>`;
    };
    const document = [];
    for (let i = 0; i < Team.length; i++) {
      if (Team[i].getRole() == "Manager") {

        document.push(generateManager(Team[i]));
      } else if (Team[i].getRole() == "Intern") {
        document.push(generateIntern(Team[i]));
      } else {
        document.push(generateEngineer(Team[i]));
      }
    }
    return document.join(" ");
  }
  


  module.exports = template;
  