
import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
