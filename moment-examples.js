var moment = require('moment');
var now = moment();

// console.log(now.format());
//
// console.log(now.format('MMM Do YYYY, h:mma'));
// is a string
// console.log(now.format('X'));
//
// // is numerical
// console.log(now.valueOf('x'));

var timeStamp = 1462476006941;
var timestampMoment = moment.utc(timeStamp);
timestampMoment.local();
console.log(timestampMoment.format('h:mm a'));
