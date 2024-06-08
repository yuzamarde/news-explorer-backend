require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function signup(req, res) {
  const { email, password, name } = req.body;
  try {
    // Cek apakah email sudah digunakan
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Enkripsi kata sandi
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Buat pengguna baru
    user = new User({ email, password: hashedPassword, name });

    // Simpan pengguna ke database
    await user.save();
    return res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  try {
    // Cek apakah email valid
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Periksa kata sandi
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Buat token JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res.json({ token });
  } catch (error) {
    console.error('Error:', error.message); // Menampilkan pesan kesalahan yang lebih spesifik
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

module.exports = {
  signup,
  signin,
};
