import express from "express";  // Importing express framework
import cors from "cors";  // Importing CORS middleware
import dotenv from "dotenv";  // Importing dotenv for environment variable management
import { dbConnection } from "./database/dbConnection.js";  // Importing database connection function
import { errorMiddleware } from './error/error.js'; // Importing custom error handler
import reservationRouter from "./routes/reservationRoute.js"; // Importing reservation routes

const app = express();  // Creating an instance of express application
dotenv.config({path:"./config/config.env"}); // Configuring dotenv to load environment variables from a specific file

// Setting up CORS middleware with specific options
app.use(cors({
    origin: [process.env.FRONTEND_URL], // Allowing requests from the specified frontend URL
    methods: ["POST", "OPTIONS"],  // Allow POST and preflight OPTIONS requests
    credentials: true,   // Allowing credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());    // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));    // Middleware to parse URL-encoded request bodies
app.use("/api/v1/reservation", reservationRouter); // Mounting the reservation routes at the specified path

dbConnection(); // Establishing database connection

app.use(errorMiddleware); // Using the custom error handling middleware

export default app; // Exporting the configured express application