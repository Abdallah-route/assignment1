'use strict'
const fs = require('fs');
const path = require('path');
const express = require('express');
const absolutePath = path.resolve('./assign3.txt');
const { createGzip } = require('zlib');
const gzip = createGzip();
const http = require('http');

/*
// number 1
const readableStream = fs.createReadStream(absolutePath, {
    encoding: 'utf-8',
    highWaterMark: 100,
})


readableStream.on('data', (chunk) => {
    console.log(chunk);
})


//number 2 , number 3
const sourceE = path.resolve('./source.txt');
const destT = path.resolve('./dest.txt');
const pipeZip = path.resolve('./no3.zip')

const readableStream1 = fs.createReadStream(sourceE, { encoding: 'utf-8' });
const writeAbleStream = fs.createWriteStream(destT);
const pipeZipWrite = fs.createWriteStream(pipeZip, { encoding: 'utf-8' });

readableStream1.pipe(writeAbleStream);
readableStream1.pipe(gzip).pipe(pipeZipWrite);
*/

// part 2
const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'users.json');

function readUsers() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// 1. Add user
app.post('/user', (req, res) => {
    const { name, age, email } = req.body;
    const users = readUsers();

    if (users.find(u => u.email === email)) {
        return res.json({ message: 'Email already exists.' });
    }

    const id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push({ id, name, age, email });
    writeUsers(users);

    res.json({ message: 'User added successfully.' });
});

// 2. Update user by ID
app.patch('/user/:id', (req, res) => {
    const users = readUsers();
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.json({ message: 'User ID not found.' });

    Object.assign(user, req.body);
    writeUsers(users);

    res.json({ message: 'User updated successfully.' });
});

// 3. Delete user by ID
app.delete('/user/:id', (req, res) => {
    const users = readUsers();
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) return res.json({ message: 'User ID not found.' });

    users.splice(index, 1);
    writeUsers(users);

    res.json({ message: 'User deleted successfully.' });
});

// 4. Get all users
app.get('/user', (req, res) => {
    res.json(readUsers());
});

// 5. Get user by ID
app.get('/user/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) return res.json({ message: 'User not found.' });

    res.json(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));


// part 3

fs.writeFile('./part3.txt', `
    1. Node.js Event Loop
The Event Loop allows Node.js to run asynchronous code without blocking the main thread by executing callbacks when the call stack is empty

2. libuv
libuv is a C library that provides Node.js with the event loop, asynchronous I/O, and a thread pool for heavy operations.

3. Asynchronous Operations in Node.js
Node.js sends async tasks to libuv, continues executing other code, and runs the callback later when the task is finished.


4. Call Stack vs Event Queue vs Event Loop
The Call Stack runs JavaScript code, the Event Queue holds completed async callbacks, and the Event Loop moves callbacks to the stack.


5. Node.js Thread Pool
The thread pool is used for heavy tasks like file system and crypto operations. The default size is 4 and can be changed using UV_THREADPOOL_SIZE.


6. Blocking vs Non-Blocking Code
Blocking code stops the event loop and delays all requests, while non-blocking code allows Node.js to handle multiple operations efficiently ` , (err) => {
    console.log(err);
})







