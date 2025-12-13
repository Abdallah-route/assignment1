'use strict'
const path = require('path');
const fs = require('fs');


// number 1
function currentPath() {
    console.log(`File:${path.dirname(__filename)}
    Dir:${path.dirname(__dirname)}`)
}
currentPath();

//number 2
function returnName(x) {
    return path.basename(x);
}
console.log(returnName(__filename));


// number 3
function objectPath() {
    const objPath = {
        dir: 'folder',
        name: 'app',
        ext: '.js'
    };
    return '/' + objPath.dir + '/' + objPath.name + objPath.ext
}
console.log(objectPath());

// number 4
function extToPath(y) {
    return path.extname(y);
}
console.log(extToPath(__filename));

//number 5
function pathToParse(z) {
    const { name, ext } = path.parse(z);
    return { name, ext };
}
console.log(pathToParse(__filename));

//number 6
function isAabsolute() {
    if (path.isAbsolute('/Documents/Route/assignemnt2.js')) {
        return 'true';
    }

}
console.log(isAabsolute());

//number 7
function joinForces(...o) {
    return path.join(...o);
}
console.log(joinForces('src', 'components', 'app.js'));

// number 8
function t7lel(k) {
    return path.resolve(k);
}
console.log(t7lel('../assignemnt2.js'));

// number 9
function twoPaths(...seg) {
    return path.join(...seg);
}

console.log(twoPaths(__dirname, __filename));

// number 10
function deleteFile(filepath) {
    const fullpath = path.join(__dirname, filepath);
    fs.unlink(filepath, (err) => {
        if (err) {
            console.log('error');
        } else {
            console.log('success', fullpath);
        }
    })
}
const fileNotWanted = path.join(__dirname, 'file.txt')
deleteFile(fileNotWanted);

// number 11
function createFolderSync(folderName) {
    try {
        const folderPath = path.join(__dirname, folderName);
        fs.mkdirSync(folderPath, { recursive: true });
        console.log("Success");
    } catch (err) {
        console.error("Error creating folder:", err.message);
    }
}

createFolderSync("newFolder");

//number 12
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('start', () => {
    console.log("Welcome event triggered!");
});

myEmitter.emit('start');

// number 13
const nameRtag = require('events');

const appEvents = new EventEmitter();

appEvents.on('userLogin', (name) => {
    console.log(`Logged in user: ${name}`);
});

appEvents.emit('userLogin', "abdallah");

// number 14
function readFileSyncExample(fileRelativePath) {
    try {
        const absoluteFilePath = path.join(__dirname, fileRelativePath);
        const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
        console.log(`the file content => "${fileContent}"`);
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
}

readFileSyncExample("./notes.txt");


// number 15
const fs1 = require('fs');
const path1 = require('path');

function saveFileAsync(filePathInput, fileContent) {
    const absolutePath = path1.join(__dirname, filePathInput);
    fs1.writeFile(absolutePath, fileContent, 'utf8', (err) => {
        if (err) {
            console.error("Error writing file:", err.message);
        } else {
            console.log(`File written successfully: ${absolutePath}`);
        }
    });
}

saveFileAsync("./async.txt", "Async save");

// number 16
const os1 = require('os');

function getOSInfo() {
    const info = {
        Platform: os1.platform(),
        Arch: os1.arch()
    };
    console.log(info);
    return info;
}

getOSInfo();

// number 17
const operatingSystem = require('os');

function fetchSystemInfo() {
    const systemDetails = {
        systemPlatform: operatingSystem.platform(),
        cpuArchitecture: operatingSystem.arch()
    };
    console.log(systemDetails);
    return systemDetails;
}

fetchSystemInfo();