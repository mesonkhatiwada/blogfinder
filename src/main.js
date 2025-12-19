import express from "express";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogs.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    port: PORT,
  });
});


app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
