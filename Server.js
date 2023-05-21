const express = require('express');
const cors = require('cors');
const collection =require('./Mongo')
// const mongodb = require('mongodb');

const app = express();

// const port = 8000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post("/", async(req,res)=>{
  const {name}= req.body

  await collection.insertMany([data])
})


app.listen(8000, ()=>{
  console.log("Port is connected")
})



// Connect to MongoDB
// const MongoClient = mongodb.MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'test';

// MongoClient.connect(url, function (err, client) {
//   if (err) {
//     console.log('Error connecting to MongoDB:', err);
//   } else {
//     console.log('Connected to MongoDB successfully');
//     const db = client.db(dbName);
    
//     // Define API routes
//     // Example: Saving form data to MongoDB
//     app.post('/api/application', (req, res) => {
//       const formData = req.body;
      
//       // Insert form data into MongoDB collection
//       db.collection('Application').insertOne(formData, (err, result) => {
//         if (err) {
//           console.log('Error saving form data:', err);
//           res.status(500).send('Error saving form data');
//         } else {
//           console.log('Form data saved successfully');
//           res.status(200).send('Form data saved successfully');
//         }
//       });
//     });
    
    // // Start the server
    // app.listen(port, () => {
    //   console.log(`Server is running on port ${port}`);
    // });
//   }
// });
