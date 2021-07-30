const Router = require('../classes/Router');
const axios = require('axios')
const Stats = require('../util/stats');

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

        this.router.get('/mysql', async (req, res) => {
            // console.log(req.query.time)
            let validQueries = ['24h', 'week', 'month', 'alltime', 'custom'];
            if (validQueries.indexOf(req.query.time) != -1) {

                try {
                    let data = await Stats.getData(req.query.time);
                    // console.log(data)
                    res.json(data);
                } catch (e) {
                    console.log(e);
                    res.status(500).json({ error: e });
                }
            }

        })

        return this.router
    }
}

module.exports = API;
