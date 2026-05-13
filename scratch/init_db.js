const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../backend/.env') });

const Contact = require('../backend/models/Contact');

const createCollection = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            console.error('MONGO_URI not found in .env');
            process.exit(1);
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(mongoURI, { family: 4 });
        console.log('✅ Connected.');

        console.log('Creating "contacts" collection by inserting a test document...');
        
        const testContact = new Contact({
            firstName: 'System',
            email: 'system@balaji.com',
            subject: 'Initial Collection Creation',
            message: 'This is an automated message to initialize the contacts collection.'
        });

        await testContact.save();
        console.log('✅ Test document saved. The "contacts" collection should now be visible in your DB.');

        // Optionally delete it immediately if you want it clean, 
        // but keeping it helps the user see it's working.
        
        await mongoose.connection.close();
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    }
};

createCollection();
