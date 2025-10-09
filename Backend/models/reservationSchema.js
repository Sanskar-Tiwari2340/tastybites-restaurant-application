import mongoose from "mongoose";
import validator from "validator";
const { trim } = validator;

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [30, "First name must be at most 30 characters"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [30, "Last name must be at most 30 characters"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [10, "Phone number must be at least 10 digits"],
        maxLength: [15, "Phone number must be at most 15 digits"],
        validate: [validator.isMobilePhone, "Please provide a valid phone number"],
        trim: true,
        unique: true,
    },
    date: {
        type: Date,
        required: [true, "Reservation date is required"],
    },
    time: {
        type: String,
        required: [true, "Reservation time is required"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);