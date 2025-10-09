import express from "express";  // Importing express framework
import { sendReservation } from "../controller/reservation.js";  // Importing the sendReservation function from the reservation controller.js

const router = express.Router();    // Creating a router instance

router.post("/send", sendReservation);  // Defining a POST route for sending reservations

export default router;  // Exporting the router for use in other parts of the application