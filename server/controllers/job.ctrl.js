const Job = require('./../models/Job')
const Company = require('./../models/Company')
// const fs = require('fs')


module.exports = {
    test: (req, res) => {
        res.send('Greetings from the test Controller!');
    },
    index: (request, result, next) => {
        Job.find({})
        .populate('company').exec((err, job)=>{
            if(err){
                result.send(err)
            } else if (!job){
                result.send("There are no jobs in the list")
            } else {
                result.send(job)
            } next()
        })
    },
    create: (request, result, next) => {
        // result.send('Job Created Successfully')

        let {title, description, postingLink, dateApplied, applicationMethod} = request.body

        let newJob = new Job({title, description, postingLink, dateApplied, applicationMethod})
        // result.send(newJob)
        newJob.save(function (err){
            if (err){
                return next(err);
            }
            result.send(newJob)
        })
        // saveJob({title, description, postingLink, dateApplied, applicationMethod})
    
        // function saveJob(obj){
        //     new Job(obj).save((err, job) => {
        //         if (err){
        //             result.send(err)
        //         } else if (!job){
        //             result.send(400)
        //         } else {
        //             return job.addCompany(request.body.company_id).then((_job) => {
        //                 return result.send(_job)
        //             })
        //         }
        //         next()
        //     })
        // }
    },
    show: (request, result, next) => {
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
    update: (request, result, next) => {
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
    }
        
}


    
