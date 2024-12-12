const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, "dist")));

// API endpoint (optional, for contact form or other dynamic content)
app.get("/api/contact", (req, res) => {
  res.json({
    email: "ethan09905@cccneb.edu",
    phone: "Your Phone Number",
  });
});

// Serve the Vue app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

