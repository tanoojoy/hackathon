const { MongoClient } = require('mongodb');
const express = require('express'); 
const connection_String = "mongodb+srv://tanoo:ptkgSEvaPlh2fZfN@4byte.23ovkup.mongodb.net/"
const database_name = 'Hackathon'
var bodyParser = require('body-parser')//add this

const app = express();
app.use(bodyParser());
const db_client = monogo_db_init();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/popup.html'));
})

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

app.get('/get_easy_question1', (req, res) => {

    const connect_db = new Promise(async function(resolve, reject){
        await db_client.connect();
        const database = db_client.db(database_name);   //replace with your database name
        collection = database.collection('Questions');  //replace with your database collection name
        resolve(collection);
    }); 
    
    Promise.all([connect_db]).then(async function(response){
        
        const query = { difficulty: "easy1" };
        const options = {
            projection: { _id: 0, question: 1},
          };
        const result = await collection.findOne(query, options);

        res.status(200).send(result);
        
    });
});

app.get('/get_easy_question2', (req, res) => {

    const connect_db = new Promise(async function(resolve, reject){
        await db_client.connect();
        const database = db_client.db(database_name);   //replace with your database name
        collection = database.collection('Questions');  //replace with your database collection name
        resolve(collection);
    }); 
    
    Promise.all([connect_db]).then(async function(response){
        
        const query = { difficulty: "easy2" };
        const options = {
            projection: { _id: 0, question: 1, answer1: 1, answer2: 1, answer3: 1, answer4: 1, correct_answe: 1},
          };
        const result = await collection.findOne(query, options);

        res.status(200).send(result.question);
        
    });
});

app.get('/get_easy_question3', (req, res) => {

    const connect_db = new Promise(async function(resolve, reject){
        await db_client.connect();
        const database = db_client.db(database_name);   //replace with your database name
        collection = database.collection('Questions');  //replace with your database collection name
        resolve(collection);
    }); 
    
    Promise.all([connect_db]).then(async function(response){
        
        const query = { difficulty: "easy3" };
        const options = {
            projection: { _id: 0, question: 1},
          };
        const result = await collection.findOne(query, options);

        res.status(200).send(result.question);
        
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