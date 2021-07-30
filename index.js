const App = new (require('./src/classes/App'));
const Logger = require('./src/util/Logger');
const Cron = require('./src/util/cron');
const sha = require('./src/util/sha512');
console.log(sha.saltHashPassword('1234'));

(async function () {
    await App.registerRoutes();
    await App.listen(() => {
        Logger.info(`Express started on on port ${process.env.EXPRESS_PORT}`);
    }, true);
    // Cron.setCron();
    // Cron.autoRunMYSQL();
})()
