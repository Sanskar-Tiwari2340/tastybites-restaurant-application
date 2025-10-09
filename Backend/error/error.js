class ErrorHandler extends Error {  // Custom Error Handler Class
    constructor(message, statusCode) {  // Constructor to initialize message and status code
        super(message); // Call the parent class (Error) constructor
        this.statusCode = statusCode; // Assign status code to the instance
    }
}

export const errorMiddleware = (err, req, res, next) => {  // Middleware function to handle errors
    err.Message = err.message || "Internal Server Error"; // Default error message
    err.statusCode = err.statusCode || 500; // Default status code

    return res.status(err.statusCode).json({  // Sending JSON response with error details
        success: false,  // Indicating failure
        message: err.Message,  // Error message
        statusCode: err.statusCode,  // Status code
    });
};

export default ErrorHandler;  // Exporting the ErrorHandler class