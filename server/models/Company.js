const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema(
    {
        name: String,
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

module.exports = mongoose.model('Company', CompanySchema)
