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
        let {title, description, postingLink, dateApplied, applicationMethod} = request.body
        let newJob = new Job({title, description, postingLink, dateApplied, applicationMethod})
       
        newJob.save(function (err, job){
            if (err){
                result.send(err);
            } else if (!job) {
                result.sendStatus(404)
            } else {
                job.addCompany(request.body.company_id).then((_job)=> {
                    result.send(newJob)
                })
           } next()
        })
    },
    show: (request, result, next) => {
        Job.findById(request.params.id)
        .populate('company').exec((err, job)=>{
            if(err){
                result.send(err)
            } else if (!job){
                result.sendStatus(400)
            }else{
                result.send(job)
            }next()
        })
    },
    update: (request, result, next) => {
        let {title, description, postingLink, dateApplied, applicationMethod} = request.body
        
        Job.findByIdAndUpdate(
            request.params.id, 
            {title, description, postingLink, dateApplied, applicationMethod},
            {new:true},
            function(err, job){
                if(err){
                    result.send(err)
                } else if (!job){
                    result.sendStatus(404)
                } else{
                    result.send(job)
                }next()
            }
        )
    },
    destroy: (request, result, next) => {
        Job.findByIdAndDelete(request.params.id,
        function(err, job){
            if(err){
                result.send(err)
            } else if (!job) {
                result.sendStatus(404)
            } else {
                result.send(`Job id ${job.id} has been deleted`)
            }
        })
    },
    noteJob: (request, result, next) => {
        Job.findById(request.params.id).then((job)=>{
            return job.addNote({
                text: request.body.note,
                entryDate: request.body.date
            }).then(()=>{
                // return result.json({msg: "Done"})
                result.send(job)
            })
        }).catch(next)
    }
        
}


    
