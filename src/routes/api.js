const Router = require('../classes/Router');
const axios = require('axios')
const mysql = require('../util/mysql');
const { exec } = require("child_process");

class API extends Router {
    constructor(client) {
        super(client, '/api');
    }
    createRoute() {

        this.router.get('/', async (req, res) => {
            res.json({
                'active': true,
                'version': 1
            });
        })

        this.router.get('/version', async (req, res) => {
            try {
                let packageConf = require('../../package.json')
                res.json(packageConf)

            } catch (e) {
                console.log(e)
            }
        })

        this.router.get('/students', async (req, res) => {
            try {
                // Todo add auth
                res.json(    {
                    code: "AEIND",
                    subject: "Indonesian",
                    year: 11,
                    teacher: "3",
                    schoolBox: "https://schoolbox.wesley.wa.edu.au/homepage/8446",
                    dateYear: 2021,
                    students: [
                        {
                            studentID: 1,
                            firstname: "John",
                            surname: "Doe",
                            c: [12,13,9,8,14,15,12]
                        },
                        {
                            studentID: 2,
                            firstname: "Maddox",
                            surname: "Best",
                            c: [8,9,11,12,9,10,10]
                        },
                        {
                            studentID: 3,
                            firstname: "Faye",
                            surname: "Hobbs",
                            c: [11,12,13,10,14,14,12]
                        },
                        {
                            studentID: 4,
                            firstname: "Velma",
                            surname: "Coles",
                            c: [10,10,8,12,13,8,9]
                        },
                        {
                            studentID: 5,
                            firstname: "Murray",
                            surname: "Bernal",
                            c: [13,12,14,13,10,15,12]
                        },
                        {
                            studentID: 6,
                            firstname: "Hendrix",
                            surname: "Sqruires",
                            c: [15,15,14,14,15,12,13]
                        },
                        {
                            studentID: 7,
                            firstname: "Sean",
                            surname: "McGinty",
                            c: [15,13,15,14,12,10,11]
                        },
                        {
                            studentID: 8,
                            firstname: "Natalia",
                            surname: "Green",
                            c: [12,14,14,12,13,9,10]
                        },
                        {
                            studentID: 9,
                            firstname: "Joel",
                            surname: "Todd",
                            c: [15,15,13,14,12,12,13]
                        },
                        {
                            studentID: 10,
                            firstname: "Zidan",
                            surname: "Leal",
                            c: [14,13,12,14,13,12,10]
                        },
                        {
                            studentID: 11,
                            firstname: "Julian",
                            surname: "Stevenson",
                            c: [14,14,13,15,12,10,12]
                        }
                    ]
                })

            } catch (e) {
                console.log(e)
            }
        })

        this.router.post('/shell/mysql', async (req, res) => {
            try {
                let data = await mysql.runQuery(req.body.command);
                console.log(data)
                res.json(data);
            } catch (e) {
                console.log(e);
                res.status(500).json({ error: e });
            }
        })

        this.router.post('/shell/sudo', async (req, res) => {
            try {
                function runCommand(command) {
                    return new Promise(function(resolve, reject) {
                        exec(command, (error, stdout, stderr) => {
                            if (error) {
                                resolve(JSON.stringify(error));
                                return;
                            }
                            if (stderr) {
                                resolve(JSON.stringify(stderr));
                                return;
                            }
                            resolve(stdout);
                            return;
                        });
                    });
                }
        
                let command = req.body.command;
                if (command) {
                    let result = await runCommand(command);
                    console.log(`Shell: ${command} | ${result}`);
                    res.send(result);
                }
            } catch (e) {
                console.log(e);
                res.status(500).json({ error: e });
            }
        })

        return this.router
    }
}

module.exports = API;
