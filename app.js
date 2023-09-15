const { createArchive } = require('./helpers/multiply');
const argv = require('./config/yargs');
const color = require('colors')

console.clear();

// console.log(argv);


//TAKE ARGUMENTS OF CONSOLE
// const  [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


// Print table of 5
// 5x1 = 5
// const base = 8;


createArchive(argv.b, argv.l, argv.h)
    .then( nameArchive => console.log(nameArchive.rainbow, 'Has been save!'.bgBlue))
    .catch( err => console.log(err));




