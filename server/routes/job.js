const jobController = require('./../controllers/job.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    // get all jobs
    router
        .route('/jobs')
        .get(jobController.getAll)

    // add a job
    router
        .route('/job')
        .post(multipartWare, jobController.addJob)

    // add a note to a job
    router
        .route('/job/note')
        .post(jobController.noteJob )

    // show a particular job
    router
        .route('/job/:id')
        .get(jobController.getJob)

    // edit-update a particular job
    router
        .route('/job/:id')
        .post(jobController.editJob)
}