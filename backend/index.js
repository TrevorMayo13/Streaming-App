const express = require('express');
const mongoose = require('mongoose');
const personRouter = require('./app/routes/personRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/nextjs_express_mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Use the person routes
app.use('/persons', personRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
