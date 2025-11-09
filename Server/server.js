import express from "express";
import cors from "cors";
import SendMailController from "./controllers/SendmailController.js"; // make sure the spelling matches

const app = express();

// CORS configuration
app.use(cors({
    origin: "*" // allow all origins, or replace "*" with your frontend URL like "http://localhost:3000"
}));

// Body parsers
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies

// Routes
app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/api/send-mail", SendMailController);

// Start server
app.listen(8000, () => {
    console.log("Server is running on port 8000...");
});
