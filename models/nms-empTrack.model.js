const mongoose = require("mongoose");

const empTrackSchema = new mongoose.Schema({
    empId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Please Enter your EMP ID !!"],
        ref: "Employee",
    },
    // dateOfJoin: {
    //     type: Date,
    //     require: true,
    // },
    currentDate: { // starting would be the DOJ from Employee master table itself
        type: true,
        required: [true, "Please Enter the Current Date !!"],
    },
    targetDeployment: {
        type: Number,
        default: 21
    }, 
    count: {
        type: Number,
        default: 0,
    },
    monthlyStatus: [Object],
    deployedYearly: {
        type: Number,
        default: 0
    }
});

const empTrackModel = mongoose.model("NMS Emp Track master", empTrackSchema);
module.exports = empTrackModel;