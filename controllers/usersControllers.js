const User = require("../models/users");

// Function to create a new user
const createUser = (req, res) => {
    const userData = req.body;
    console.log({userData})


    
    User.create(userData)
      .then(newUser => {
        console.log({ message: "Member added successfully", newUser });
        res.status(200).send("Sign up made successfully");
      })
      .catch(error => {
        console.error("An error occurred");
        console.error({ error });
        res.status(500).send("Error creating user");
      });
  };
  
// Function to view(read) a user's profile
const viewUser = (req, res) => {
  const userId = req.params.userId; // Retrieve the user ID from the request parameters

  // Use the userId to fetch the user's data from the database
  User.findById(userId)
    .then(user => {
      if (!user) {
        console.log("User not found");
        return res.send("User not found");
      }
      console.log({ message: "User retrieved successfully", user });
      // Render the user's profile page or send the user data as JSON
      // Example: res.render("profile", { user });
    })
    .catch(error => {
      console.error("An error occurred while retrieving user data");
      console.error({ error });
      res.status(500).send("Error retrieving user data");
    });
};

// Function to update a user's profile
const updateUser = (req, res) => {
  const userId = req.params.userId; // Retrieve the user ID from the request parameters
  const userData = req.body; // Retrieve the updated user data

  // Use the userId to locate the user in the database and update their details
  User.findByIdAndUpdate(userId, userData, { new: true }, (err, updatedUser) => {
    if (err) {
      console.error("An error occurred while updating the user");
      console.error({ error: err });
      res.status(500).send("Error updating user");
    } else {
      console.log({ message: "User updated successfully", updatedUser });
      // Redirect to the user's profile page or a success page
      // Example: res.redirect(`/users/${userId}`);
    }
  });
};

// Function to delete a user's profile
const deleteUser = (req, res) => {
  const userId = req.params.userId; // Retrieve the user ID from the request parameters

  // Use the userId to locate and remove the user from the database
  User.findByIdAndRemove(userId, (err) => {
    if (err) {
      console.error("An error occurred while deleting the user");
      console.error({ error: err });
      res.status(500).send("Error deleting user");
    } else {
      console.log("User deleted successfully");
      // Redirect to a success page or a user management page
      // Example: res.redirect('/users');
    }
  });
};

module.exports = {
  createUser,
  viewUser,
  updateUser,
  deleteUser, 
};

