const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authRouter = require('./authRouter');

const app = express();

app.use(express.json());
app.use("/auth", authRouter)

const uri = "mongodb+srv://gobpo2002:Qwer1234@Cluster0.joxk3mq.mongodb.net/auth_roles?retryWrites=true&w=majority";


const start = async () => {
    try {
        await mongoose.connect(uri)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()