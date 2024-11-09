import dbConnect from "@/Helpers/dbConnect"
import EnquiryModel from "@/models/Schema";  // Import the Mongoose schema/model

export default async function handler(req, res) {
    await dbConnect(); // Ensure the database is connected
  res.status(200).json({ message: "API is working" });
}

