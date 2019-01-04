const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        postingLink: String,
        dateApplied: Date,
        applicationMethod: String,
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
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

JobScheme.methods.addNote = function(note){
    this.notes.push(note);
    return this.save();
}

JobSchema.methods.addCompany = function (company_id){
    this.company = company_id;
    return this.save();
}

JobSchema.methods.getCompanyJobs = function(id){
    Job.find({'company': id}).then((jobs)=> {return jobs})
}

module.exports = mongoose.model('Job', JobSchema)
