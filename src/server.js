import express from "express";
import morgan from "morgan";

const PORT = 8000;
const app = express();
const logger = morgan("dev");

app.use(logger);

const handleListening = () =>
  console.log(`Server Running!😊 🤍 http://localhost:${PORT} 🤍`);

app.listen(PORT, handleListening);
