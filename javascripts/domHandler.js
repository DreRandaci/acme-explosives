'use strict';

const buildDom = (allData, e) => {
    $('#output').html('');
    let domString = '';
    allData.forEach((thing) => {
        if (e.target.innerHTML === thing[0].name) {                        
            domString += `<h1>${thing[0].name}</h1>`;
            thing[0].categoryTypes.forEach((types) => {                
                domString += `<div class='col-md-4'>`;
                domString += `<h3>${types.name}</h3>`;
                thing[0].products.forEach((prod) => {
                    domString += `<p>${prod[0].name}</p>`;  
                    domString += `</div>`;
                });
            });
            
        }        
    });
    writeToDom(domString);
};

const writeToDom = (str) => {
    $('#output').append(str);
};

module.exports = {buildDom};
