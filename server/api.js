const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./connection.js");

// app.use('/api')
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/api/getusers", async (req, res) => {
  const selectQuery = "SELECT * FROM users";

  try {
    const { rows } = await pool.query(selectQuery);
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/sajid", async (req, res) => {


  try {
 
    res.json({ data: {name: "SAJID TESTING LIGHTSAIL"} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/users", async (req, res) => {
  console.log(req.body);
  const { title,description,date,status} = req.body;
  console.log(title,description,date,status,"sahil");
  
  const insertQuery =
    "INSERT INTO users(title,description,date,status) VALUES ($1, $2, $3,$4)";
  const values = [title,description,date,status]

  try {
    // Assuming `pool` is your PostgreSQL connection pool
    await pool.query(insertQuery, values);
    res.json({ status: 200, message: "POST REQUEST WAS updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/updateuser/:id", async (req, res) => {
  const userId = req.params.id;
  const { firstname, lastname, location } = req.body;

  const updateQuery =
    "UPDATE users SET firstname = $1, lastname = $2, location = $3 WHERE id = $4";
  const values = [firstname, lastname, location, userId];

  try {
    await pool.query(updateQuery, values);
    res.json({
      status: 200,
      message: `User with ID ${userId} updated successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/updateuser/:id", async (req, res) => {
  const userId = req.params.id;
  const { firstname, lastname, location } = req.body;

  // Check if at least one field is present in the request body
  if (!firstname && !lastname && !location) {
    return res
      .status(400)
      .json({
        error:
          "At least one field (firstname, lastname, location) is required for update",
      });
  }

  let updateQuery = "UPDATE users SET ";
  const values = [];
  const updateFields = [];

  if (firstname) {
    updateFields.push("firstname = $1");
    values.push(firstname);
  }
  if (lastname) {
    updateFields.push("lastname = $" + (values.length + 1));
    values.push(lastname);
  }
  if (location) {
    updateFields.push("location = $" + (values.length + 1));
    values.push(location);
  }

  updateQuery +=
    updateFields.join(", ") + " WHERE id = $" + (values.length + 1);
  values.push(userId);

  try {
    await pool.query(updateQuery, values);
    res.json({
      status: 200,
      message: `User with ID ${userId} updated successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  const userId = req.params.id;

  const deleteQuery = "DELETE FROM users WHERE id = $1";
  const values = [userId];

  try {
    await pool.query(deleteQuery, values);
    res.json({
      status: 200,
      message: `User with ID ${userId} deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});
