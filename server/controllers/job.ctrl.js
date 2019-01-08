const Job = require('./../models/Job')
const Company = require('./../models/Company')
// const fs = require('fs')


module.exports = {
    test: (req, res) => {
        res.send('Greetings from the test Controller!')
    },
    addJob: (request, result, next) => {
        let {title, description, postingLink, dateApplied, applicationMethod} = request.body
        saveJob({title, description, postingLink, dateApplied, applicationMethod})
    
        function saveJob(obj){
            new Job(obj).save((err, job) => {
                if (err){
                    result.send(err)
                } else if (!job){
                    result.send(400)
                } else {
                    return job.addCompany(request.body.company_id).then((_job) => {
                        return result.send(_job)
                    })
                }
                next()
            })
        }
    },
    getAll: (request, result, next) => {
        Job.find({})
        .populate('company').exec((err, job)=>{
            if(err){
                result.send(err)
            } else if (!job){
                result.send(404)
            } else {
                result.send(job)
            } next()
        })
    },
    noteJob: (request, result, next) => {
        Job.findById(request.params.id).then((job)=>{
            return job.addNote({
                text: request.body.note,
                entryDate: request.body.date
            }).then(()=>{
                return result.json({msg: "Done"})
            })
        }).catch(next)
    },
    getJob: (request, result, next) => {
        Job.findById(request.params.id)
        .populate('company').exec((err, job)=>{
            if(err){
                result.send(err)
            } else if (!job){
                result.send(404)
            }else{
                result.send(job)
            }next()
        })
    },
    editJob: (request, result, next) => {
        let {title, description, postingLink, dateApplied, applicationMethod} = request.body
        
        Job.findOneAndUpdate(
            {id: request.params.id}, 
            {title, description, postingLink, dateApplied, applicationMethod}
        ).exec((err, job) =>{
            if(err){
                result.send(err)
            } else if (!job){
                result.send(404)
            }else{
                result.send(job)
            }next()
        })

    }
        
}


    
