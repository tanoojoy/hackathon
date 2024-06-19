const { MongoClient } = require('mongodb');
const express = require('express'); 
const connection_String = "mongodb+srv://tanoo:ptkgSEvaPlh2fZfN@4byte.23ovkup.mongodb.net/"
const database_name = 'Hackathon'
var bodyParser = require('body-parser')//add this

const app = express();
app.use(bodyParser());
const db_client = monogo_db_init();

app.post('/get_nickname', (req, res) => {
	
    var player_nickname;
    var player_name = req.body.name;

    const connect_db = new Promise(async function(resolve, reject){
        await db_client.connect();
        const database = db_client.db(database_name);   //replace with your database name
        collection = database.collection('players');  //replace with your database collection name
        resolve(collection);
    }); 
    
    Promise.all([connect_db]).then(async function(response){
        
        const query = { name: player_name };
        const result = await collection.findOne(query);
    
        console.log(result);
        res.status(200).send(result.nickname);
        
    });
	
});

app.get('/get_questions', (req, res) => {

    const connect_db = new Promise(async function(resolve, reject){
        await db_client.connect();
        const database = db_client.db(database_name);   //replace with your database name
        collection = database.collection('Questions');  //replace with your database collection name
        resolve(collection);
    }); 
    
    Promise.all([connect_db]).then(async function(response){
        
        const query = {};
        const options = {
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, question: 1, answer: 1 },
          };
        const result = await collection.find(query, options);

        for await (const doc of result) {
            console.dir(doc);
        }
        
        res.status(200);
        
    });
});
 

function monogo_db_init(){
    const uri = connection_String;
    const db_client = new MongoClient(uri);

    return db_client;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});