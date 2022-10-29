const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());

const categories = require("./category.json");
const courses = require("./courses.json");

app.get("/category", (req, res) => {
  res.send(categories);
});

app.get("/courses/info/:id", (req, res) => {
  const { id } = req.params;
  const selectedCourses = courses.filter((course) => course.category == id);
  res.send(selectedCourses);
});
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
