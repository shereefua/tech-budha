
import React from 'react'

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,old version no need aftr 4.0
            // useUnifiedTopology: true,old version no need aftr 4.0
            autoIndex: true, // optional
            serverSelectionTimeoutMS: 15000, // Increased timeout to 15 seconds
        });

        const connection = mongoose.connection;

        connection.on("conected", () => {
            console.log("MongoDb connected succefuely");
        });

        console.log("connected succefuly");

        connection.on("error", (err) => {
            console.log("MongoDb connection error" + err);
            process.exit();
        });
    } catch (error) {
        console.log(`from dbconfig,js catch eror${error}`);
    }
};

export default dbConnect