const job = require('./job');
const company = require('./company');

module.exports = (router) => {
    company(router);
    job(router);
}