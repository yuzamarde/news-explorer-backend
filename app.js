const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const authsRouter = require('./routes/auths');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

// Menghubungkan ke MongoDB

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}
main().catch((err) => console.log(err));

// Middleware untuk memproses body JSON pada request
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'http://localhost:3000' || 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware untuk memproses cors
app.use(cors());
app.options('*', cors());

// Middleware untuk menangani request logger
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server akan crash saat ini');
  }, 0);
});

// Menggunakan router
app.use(authsRouter);
app.use(usersRouter);
app.use(articlesRouter);

// Middleware untuk menangani kesalahan pada request
app.use(errorLogger);

// Middleware untuk menangani kesalahan pada request dari celebrate
app.use(errors());

// Middleware untuk menangani 404 (Sumber daya tidak ditemukan)
app.use((req, res) => {
  res.status(404).json({ message: 'Sumber daya yang diminta tidak ada' });
});



// Middleware untuk menangani error umum
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  console.log('Aplikasi berjalan dalam mode pengembangan.');
} else {
  console.log('Aplikasi berjalan dalam mode produksi.');
}

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
