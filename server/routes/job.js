const jobController = require('./../controllers/job.ctrl')

module.exports = (router) => {
    // test route
    router
        .route('/test')
        .get(jobController.test)
    // get all jobs -index
    router
        .route('/jobs')
        .get(jobController.index)
    // create job
    router
        .route('/job')
        .post(jobController.create)
     // show a particular job
    router
        .route('/job/:id')
        .get(jobController.show)

    // update a particular job
    router
        .route('/job/:id')
        .put(jobController.update)
    // destroy a particular job
    router
        .route('/job/:id')
        .delete(jobController.destroy)
    // add a note to a job
    router
        .route('/job/:id/note')
        .post(jobController.noteJob )
}