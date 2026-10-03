const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smart-career-tracker');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`MongoDB Connection Error: ${error.message}`);
    console.warn('Running backend with fallback database simulation if MongoDB server is unavailable.');
  }
};

module.exports = connectDB;
