const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authRouter = require('./authRouter');

const app = express();

app.use(express.json());
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://gobpo2002:qwer1234@cluster0.joxk3mq.mongodb.net/auth_roles?appName=Cluster0")
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()