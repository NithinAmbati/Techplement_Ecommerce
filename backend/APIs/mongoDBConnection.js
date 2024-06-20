const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://nithinambati2:yLbT7wHeE14Surh1@cluster0.9qpuxmc.mongodb.net/Techplement?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("Error connecting to DB:", err));

// Define User schemas
const userSchema1 = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userSchema2 = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema1);
const Admin = mongoose.model("admin", userSchema2);

module.exports = { User, Admin };
