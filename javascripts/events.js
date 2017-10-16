'use strict';

const data = require('./data');
const dom = require ('./domHandler');

$('#dropdown').click((e) => {
    //grab all the data, pass it to domBuilder
    let allData = data.getAllData();
        dom.buildDom(allData, e);        
});

module.exports = {};