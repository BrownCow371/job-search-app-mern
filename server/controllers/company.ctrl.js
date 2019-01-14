const Company = require('./../models/Company')

module.exports = {
    index: (request, result, next) => {
        Company.find({})
            .populate('postings').exec((err, company)=>{
                if(err){
                    result.send(err)
                } else if (!company){
                    result.send("There are no companies in the list")
                } else {
                    result.send(company)
                } next()
            })
    },
    create: (request, result, next) => {
        let {name, companyLink, contactPerson, notes} = request.body;
        let newCompany = new Company({name, companyLink, contactPerson, notes});

        newCompany.save(function (err, company){
            if (err){
                result.send(err);
            } else if (!company) {
                result.sendStatus(404)
            } else {
                result.send(newCompany)
           } next()
        })
    },
    show: (request, result, next) => {
        Company.findById(request.params.id)
        .populate('postings').exec((err, company)=>{
            if(err){
                result.send(err)
            } else if (!company){
                result.sendStatus(400)
            }else{
                result.send(company)
            }next()
        })
    },
    update: (request, result, next) => {}
}