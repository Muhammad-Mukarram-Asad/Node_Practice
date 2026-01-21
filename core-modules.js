const path = require('path');
const util = require('util');
const v8 = require('v8');

// console.log(path.basename(__filename));
// const dirUploads = path.join(__dirname, 'uploads', 'images');
// console.log(dirUploads);
// console.log(util.inspect(dirUploads));
// util.log(dirUploads);
// util.log(path.basename(__filename));
// console.log(util.log(v8.getHeapStatistics()));

const collectAnswers = require('./lib/collectAnswers');

const questions = [
    'What is your name?',
    'Where do you live?',
    'What are you going to do with Node.js?'
];


// collectAnswers(questions, (answers) => {
//     console.log("Thanks for your answers!");
//     console.log(answers);
//     process.exit(); // or we can also use ==> rl.close();
// })

// use the above function with event emitter:

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thanks for your answers!");
    console.log(answers);
    process.exit();
})

answerEvents.on("answer", answer => console.log(`Got the answer: ${answer}`));



// creating a module:

// const events =  require('events');
// const emitter = new events.EventEmitter();

// emitter.on('customEvent', (message, user) => {
//     console.log(`${user}: ${message}`);
// })

// emitter.emit('customEvent', 'hello world', 'John Doe');
// emitter.emit('customEvent', 'Node.js ', 'Everyone');

// process.stdin.on("data", (data) => {
//     const msg = data.toString().trim();
//     if(msg === 'exit') {
//         emitter.emit('customEvent', "Good Bye!", "process");
//         process.exit();
//     }
//     // how to take complete input from the user
//     emitter.emit('customEvent', msg, "Terminal");
// })