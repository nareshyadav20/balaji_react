const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config({ path: path.join(__dirname, '../backend/.env') });

async function run() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    try {
        console.log('Connecting with native driver...');
        await client.connect();
        console.log('✅ Connected.');

        const db = client.db('livora');
        const collection = db.collection('contacts');

        console.log('Inserting test document...');
        const result = await collection.insertOne({
            firstName: 'System',
            email: 'system@balaji.com',
            subject: 'Initial Collection Creation',
            message: 'This is an automated message to initialize the contacts collection.',
            createdAt: new Date()
        });

        console.log(`✅ Success! Inserted document with ID: ${result.insertedId}`);
        console.log('The "contacts" collection should now be visible in your MongoDB Atlas UI.');

    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        await client.close();
    }
}

run();
