import { User } from "../models/user.js";

export const getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    });
};
