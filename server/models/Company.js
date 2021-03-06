const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        companyLink: String,
        contactPerson: String,
        notes: String,
        postings: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job'
            }
        ]
    }
)

// Add functions here for manipulating Company Objects

CompanySchema.methods.addPosting = function(posting){
    this.postings.push(posting)
}
module.exports = mongoose.model('Company', CompanySchema)
