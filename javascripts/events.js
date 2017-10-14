'use strict';

const data = require('./data');

let allData = data.getAllData();
// console.log('allData', allData);

$('a').click((e) => {
    console.log(e.target);    
    // allData.forEach((click) => {
    //     console.log('click:', click);
    //     if (e.target.innerHTML === click.name) {
    //         console.log('click.name:', click.name);
    //     }
    // });
});

module.exports = {};