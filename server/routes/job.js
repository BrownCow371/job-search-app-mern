const jobController = require('./../controllers/job.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    // test route
    router
        .route('/test')
        .get(jobController.test)
    // get all jobs
    router
        .route('/jobs')
        .get(jobController.index)

    // add a job
    // router
    //     .route('/job')
    //     .post(multipartWare, jobController.create)
    router
        .route('/job')
        .get(jobController.create)
    // add a note to a job
    router
        .route('/job/note')
        .post(jobController.noteJob )

    // show a particular job
    router
        .route('/job/:id')
        .get(jobController.show)

    // edit-update a particular job
    router
        .route('/job/:id')
        .post(jobController.update)
}