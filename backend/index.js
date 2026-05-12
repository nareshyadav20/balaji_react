const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const authRoutes = require('./routes/authRoutes');

dotenv.config({ override: true });

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        // Allow all local origins during development
        if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Livora API is running...');
});

// Database Connection
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('CRITICAL: MONGO_URI is not defined in .env file');
} else {
    console.log('Connecting to MongoDB...');
}

// Start Server First
app.listen(PORT, () => {
    console.log(`🚀 Server is LIVE on port ${PORT}`);
    
    // Then Connect to MongoDB
    console.log('⏳ Connecting to MongoDB...');
    mongoose.connect(mongoURI, { family: 4 })
        .then(() => console.log('✅ MongoDB Connected Successfully'))
        .catch(err => {
            console.error('❌ MongoDB Connection Error:', err.message);
            // Don't exit process, keep server alive
        });
});
