const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const allowedOrigins = [
  'http://localhost:5173', // Vite dev
  'https://group-project-comp229-frontend.onrender.com', // Render deployed frontend
];

const app = express();
app.use(cors({
  origin: allowedOrigins,
  credentials: true // ✅ if you're using cookies or auth headers like JWT
}));
app.use(express.json());

// routes
const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api/surveys', surveyRoutes);

const responseRoutes = require('./routes/responseRoutes');
app.use('/api/responses', responseRoutes);

app.use('/api/auth', authRoutes);

// root
app.get('/', (req, res) => {
  res.send('API is running...');
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));