const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser.js");
const Trip = require("../models/Trip.js");
const Feedback = require("../models/Feedback.js");
require("dotenv").config()







router.post("/share-ride-details", fetchUser, async (req, res) => {
   var driver_name = req.body.driver_name
   var driver_phone = req.body.driver_phone
   var cab_number = req.body.cab_number
   var start_location = req.body.start_location
   var end_location = req.body.end_location
   var start_time = req.body.start_time
   var link  = req.body.link
   var tripId = req.body.tripId

   var message = ""
   message = message + "TripId : " + tripId + "\n" + "Driver Name : " + driver_name + "\n" +
   "Driver Phone : " + driver_phone + "\n" + 
   "Cab Number : " + cab_number + "\n" +
   "Start Location : " + start_location + "\n" +
   "End Location : " + end_location + "\n" +
   "Start Time : " + start_time + "\n" + 
   "Link : " + link;

   await sendSMS(message);
   await sendWhatsapp(message);

   res.json("SMS sent successfully.");


});


router.post("/sharefeedback", fetchUser, async(req, res) => {
    try {
        const feedback = new Feedback({
            tripId : req.body.tripId,
            name : req.body.name,
            email : req.body.email,
            feedback : req.body.feedback
        });

        const savedTrip = await feedback.save();
        console.log(savedTrip);
        
        // Sending a response back to the client
        res.status(201).json(savedTrip);

    } catch (error) {
        console.error("Error sharing feedback:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


router.get("/getallfeedbacks", fetchUser, async (req, res) => {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
})

module.exports = router;