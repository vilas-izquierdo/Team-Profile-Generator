const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer")
const template = require("./template")
const inquirer = require("inquirer");
const Team = [];

const init = () => {
    inquirer
    .prompt([
            {
                name: "role",
                type: "list",
                message: "What is your team role?",
                choices: ["Manager","Intern","Engineer"],
            },
        ])

.then((choice) =>{

    if(choice.role == "Manager") 
    {inquirer
    .prompt([
        {
            name: "managersname",
            type: "input",
            message: "What is your name?",
            },
            {
                name: "managersid",
                type: "input",
                message: "What is your ID?",
                },
                {
                    name: "managersmail",
                    type: "input",
                    message: "What is your email?",
                    },
                    {
                        name: "managersofficenumber",
                        type: "input",
                        message: "What is your office number?",
                        },
           ])
        .then((managersanswers)=> {
            const addManager = new Manager(
                managersanswers.managersname,
                managersanswers.managersid,
                managersanswers.managersmail,
                managersanswers.managersofficenumber
            );

            Team.push(addManager);
            inquirer
            .prompt([
                {
name: "moremembers",
type: "list",
message: "Are you done?",
choices: ["Yes", "No"],
                },
            ])
            .then((nextThing)=>{
                if(nextThing.moremembers == "Yes"){
                    const Cards = template(Team);
                    fs.writeFile(`./newsite/teamprofile.html`, Cards, 
                    (err) => err
                    ? console.log("Uh Oh! Something went wrong!")
                    : console.log("Success!")
                    );
                }
                else{
                    init();
                }
            });
        });
        
        

}
else if(choice.role == "Intern"){
    inquirer
    .prompt([
        {
            name: "internsname",
            type: "input",
            message: "What is your name?",
            },
            {
                name: "internsid",
                type: "input",
                message: "What is your ID?",
                },
                {
                    name: "internsmail",
                    type: "input",
                    message: "What is your email?",
                    },
                    {
                        name: "internsschool",
                        type: "input",
                        message: "Where did you go to school?",
                        },
    ])
    .then((internsanswers)=>{
        const addintern = new Intern(
            internsanswers.internsname,
            internsanswers.internsid,
            internsanswers.internsmail,
            internsanswers.internsschool
        );
        Team.push(addintern);
        inquirer
            .prompt([
                {
name: "moremembers",
type: "list",
message: "Are you done?",
choices: ["Yes", "No"],
                },
            ])
            .then((nextThing)=>{
                if(nextThing.moremembers == "Yes"){
                    const Cards = template(Team);
                    fs.writeFile(`./newsite/teamprofile.html`, Cards, 
                    (err) => err
                    ? console.log("Uh Oh! Something went wrong!")
                    : console.log("Success!")
                    );
                }
                else{
                    init();
                }
            });
        });
        
        }
        else{

            inquirer
            .prompt([
                {
                    name: "engineersname",
                    type: "input",
                    message: "What is your name?",
                    },
                    {
                        name: "engineersid",
                        type: "input",
                        message: "What is your ID?",
                        },
                        {
                            name: "engineersmail",
                            type: "input",
                            message: "What is your email?",
                            },
                            {
                                name: "engineersgithub",
                                type: "input",
                                message: "What is your GitHub username?",
                                },
            ])
            .then((engineersanswers)=>{
                const addintern = new Engineer(
                    engineersanswers.engineersname,
                    engineersanswers.engineersid,
                    engineersanswers.engineersmail,
                    engineersanswers.engineersgithub
                );
                Team.push(addintern);
                inquirer
                    .prompt([
                        {
        name: "moremembers",
        type: "list",
        message: "Are you done?",
        choices: ["Yes", "No"],
                        },
                    ])
                    .then((nextThing)=>{
                        if(nextThing.moremembers == "Yes"){
                            const Cards = template(Team);
                            fs.writeFile(`./newsite/teamprofile.html`, Cards, 
                            (err) => err
                            ? console.log("Uh Oh! Something went wrong!")
                            : console.log("Success!")
                            );
                        }
                        else{
                            init();
                        }
                    });
                });
                }
    });
};


init();

module.exports = Team;

    
