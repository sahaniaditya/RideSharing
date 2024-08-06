require("dotenv").config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const accountToken = process.env.TWILIO_AUTH_TOKEN 



const client = require("twilio")(accountSid, accountToken)

const sendSMS = async(body) => {
    let msgOptions = {
        from : process.env.TWILIO_PHONE_NUMBER, 
        to : "+91 7275560530",
        body
    }
    try{
        const message = await client.messages.create(msgOptions)
        console.log(message)
    }catch(error){
        console.log(error)          
    }
}

const sendWhatsapp = async(body) => {
       await client.messages.create({
            body: body,
            from: 'whatsapp:+14155238886',
            to: "whatsapp:+917275560530"
        });

}

sendWhatsapp("Hello from node JS App")