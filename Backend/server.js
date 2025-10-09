import app from "./app.js";

const PORT = process.env.PORT || 4000; // Use 4000 or any other port for local dev

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});