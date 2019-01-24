const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: String,
        postingLink: String,
        dateApplied: {
            type: Date,
            default: Date.now
         },
        applicationMethod: String,
        company: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,           
            ref: 'Company',            
        },
        notes: [
            {
                text: String,
                entryDate: {
                    type: Date,
                    default: Date.now
                 }
            }
        ]

    }
);

// Add functions here for manipulating Job Object properties

JobSchema.methods.addNote = function(note){
    this.notes.push(note);
    return this.save();
}

JobSchema.methods.addCompany = function(companyId){
    this.company = companyId;
    return this.save();
}

JobSchema.methods.getCompanyJobs = function(id){
    Job.find({'company': id}).then((jobs)=> {return jobs})
}

module.exports = mongoose.model('Job', JobSchema)
