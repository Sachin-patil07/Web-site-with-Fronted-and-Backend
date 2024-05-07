const express = require("express");
const app = express();
app.use(express.json());

require("./db/connection");
const Users = require("./Models/User.js");

app.post("/", async (req, res) => {
  // try and catch - to handle any error within the route handler.
  // try {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});

//     res.send("Request received successfully");
//   } catch (error) {
//     console.error("Error:error");
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
