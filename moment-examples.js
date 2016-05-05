var moment = require('moment');
var now = moment();

// Time Now

// console.log(now.format());
//
// console.log(now.format('MMM Do YYYY, h:mma'));
// is a string
// console.log(now.format('X'));
//
// // is numerical
// console.log(now.valueOf('x'));


// UTC time

// var timeStamp = 1462476006941;
// var timestampMoment = moment.utc(timeStamp);
// timestampMoment.local();
// console.log(timestampMoment.format('h:mm a'));


var timestampMoment = moment.utc(now.format());
console.log(timestampMoment.valueOf());
console.log(timestampMoment.format('h:mm a'));
timestampMoment.local();
console.log(timestampMoment.format('h:mm a'));
