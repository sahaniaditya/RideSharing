const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser.js");
const Trip = require("../models/Trip.js");
// const app = express();
// app.use(express.json());
// var cors = require('cors')

// app.use(cors())


require("dotenv").config()









router.post("/createride", fetchUser, async (req, res) => {

    try {
        const trip = new Trip({
            start_location: req.body.start_location,
            end_location: req.body.end_location,
            user: req.user
        });

        const savedTrip = await trip.save();
        console.log(savedTrip);
        
        // Sending a response back to the client
        res.status(201).json(savedTrip);

    } catch (error) {
        console.error("Error creating ride:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/getallrides", fetchUser, async (req, res) => {
    notes = await Trip.find({user : req.user});
    res.json(notes);
})



router.put("/completeride/:id", fetchUser, async (req, res) => {
    const { id } = req.params;
  const { status } = req.body;
  var end_date = Date.now();

  var message = "Reached successfully at the destination."
  

  if (!status) {
    return res.status(400).send({ message: "Status is required" });
  }

  await sendSMS(message);
  await sendWhatsapp(message);

  Trip.findByIdAndUpdate(id, { $set: { status : status, end_date : end_date } }, { new: true })
    .then(trip => {
      if (!trip) {
        return res.status(404).send({ message: "Trip not found" });
      }
      
      res.send({ message: "Trip status updated successfully", trip });
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating trip", err });
    });
   
    

    
})

router.get("/admin-rides", fetchUser, async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);

})




module.exports = router;