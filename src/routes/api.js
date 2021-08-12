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
