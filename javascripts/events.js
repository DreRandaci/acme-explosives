'use strict';

const data = require('./data');
const dom = require ('./domHandler');

$('#dropdown').click((e) => {
    let allData = data.getAllData();
        dom.buildDom(allData, e);
});

module.exports = {};