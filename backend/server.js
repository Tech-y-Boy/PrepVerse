const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://prepverse-phi.vercel.app'],
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'PrepVerse backend running' });
});

const assessmentRoutes = require('./routes/assessment.routes');
const careerRoutes = require('./routes/career.routes');
app.use('/api/assessment', assessmentRoutes);
app.use('/api/careers', careerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));