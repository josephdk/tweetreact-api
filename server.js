const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Fake database for testing
const db = {
    users: [
        {
            id: '1',
            firstName: 'George',
            lastName: 'Washington',
            username: 'theOGgeorgew',
            email: 'george.washington@fakemail.com',
            password: 'a',
            joined: new Date()
        },
        {
            id: '2',
            firstName: 'John',
            lastName: 'Adams',
            username: 'the_adam_bomb',
            email: 'john.adams@fakemail.com',
            password: 'b',
            joined: new Date()
        },
    ],
    tweets: [
        {
            tweetid: '1',
            authorUsername: 'theOGgeorgew',
            tweetContent: 'First!  Just like my presidency.'
        },
        {
            tweetid: '2',
            authorUsername: 'the_adam_bomb',
            tweetContent: 'USA 1 - 0 GB.  GG no rm.  #flex'
        }
    ]
}

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(db);
})

app.post('/signin', (req, res) => {
    res.send('post working');
})

app.listen(3001, () => {
    console.log('Server operational on port 3001');
})


// signin 
// register 
// profile 
// tweet 
// favorite 
// retweet 