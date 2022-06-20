import express from "express";

const PORT = 8000;
const app = express();

const handleListening = () =>
  console.log(`Server Running!😊 🤍 http://localhost:${PORT} 🤍`);

app.listen(PORT, handleListening);
