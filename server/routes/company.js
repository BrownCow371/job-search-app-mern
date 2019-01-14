const companyController = require('./../controllers/company.ctrl')

module.exports = (router) => { 
    // index of companies
    router
        .route('/companies')
        .get(companyController.index);
    // create company
    router
        .route('/company')
        .post(companyController.create);
    // show company
    router
        .route('/company/:id')
        .get(companyController.show)
    // update company
    router
        .route('/company/:id')
        .put(companyController.update)
    // leaving delete out on purpose - don't think we have a need?
}