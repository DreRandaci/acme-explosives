'use strict';

const data = require('./data');
const dom = require ('./domHandler');

$('a').click((e) => {
    let allData = data.getAllData();
    allData.forEach((thing) => {
        if (e.target.innerHTML === thing[0].name) {
            dom.buildDom(thing[0]);
        }        
    });    
});

module.exports = {};