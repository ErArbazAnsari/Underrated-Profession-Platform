const mongoose = require("mongoose");

// Connect to MongoDB
const uri = "";
mongoose.connect(uri);

// Create a schema
const RegisteredUsers = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now,
    },
    isFeatured: Boolean,
});

// Create a model

const Data = mongoose.model("Data", textSchema);

const main = async () => {
    try {
        // Inserting Data
        const data = await Data.insertMany([
            {
                stu_name: "Arbaz",
                rollNo: 1,
                age: 21,
                branch: "CSE",
                isFeatured: true,
            },
        ]);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
    }
};

main();
