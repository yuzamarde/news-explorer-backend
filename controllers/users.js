const User = require('../models/user');

// Controller untuk mengambil informasi pengguna yang login (nama dan email)
async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getCurrentUser,
};
