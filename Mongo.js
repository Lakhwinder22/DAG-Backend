const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login-tut")

.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("Failed");
})

const newSchema= new mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        // contact:{
        //     type:String,
        //     required: true,
        // },
        // altContact:{
        //     type:String,
        //     required: true,
        // },
        // email:{
        //     type:String,
        //     required: true,
        // }, 
        // fatherOccupation:{
        //     type:String,
        //     required: true,
        // },
        // fatherName:{
        //     type:String,
        //     required: true,
        // },
        // fatherDesignation:{
        //     type:String,
        //     required: true,
        // },
        // fatherDesignation:{
        //     type:String,
        //     required: true,
        // },
        // motherName:{
        //     type:String,
        //     required: true,
        // },
        // address:{
        //     type:String,
        //     required: true,
        // },
        // dob:{
        //     type:String,
        //     required: true,
        // },
        // gender:{
        //     type:String,
        //     required: true,
        // },
        // category:{
        //     type:String,
        //     required: true,
        // },
        // collegeName:{
        //     type:String,
        //     required: true,
        // },
        // Boards:{
        //     type:String,
        //     required: true,
        // },
        // markss:{
        //     type:String,
        //     required: true,
        // },
        // collegeNames:{
        //     type:String,
        //     required: true,
        // },
        // mars
        // :{
        //     type:String,
        //     required: true,
        // },
        // AnyNotes
        // :{
        //     type:String,
        //     required: true,
        // },
        // Reference:{
        //     type:String,
        //     required: true,
        // },

})
const collection =mongoose.model("collection" ,newSchema)

module.exports=collection