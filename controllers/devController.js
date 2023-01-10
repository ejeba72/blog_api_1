const { UserModel } = require('../Models/UserModel');

// GET-ALL-BLOGS LOGIC
function getAllBlogsLogic(req, res) {}

// GET-ALL-USERS LOGIC
async function getAllUsersLogic(req, res) {
  const allUsers = await UserModel.find();
  console.log(allUsers);
  res.status(200).send(allUsers);
}

module.exports = { getAllBlogsLogic, getAllUsersLogic };
