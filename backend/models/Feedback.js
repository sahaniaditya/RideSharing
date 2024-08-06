/*User Schema to hold the login and sign up data of the user.*/

const mongoose =  require("mongoose");
const { Schema } = mongoose;

const FeedbackSchema = new Schema({
   
  tripId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Trip"
  }, 
  name:{
    type : String,
    required : true
  },
  email:{
    type : String,
    required : true,
    unique : true
  },
  date:{
    type : Date,
    default : Date.now
  },
  feedback:{
    type : String,
    required : true
  }
});


module.exports = mongoose.model("Feedback",FeedbackSchema);