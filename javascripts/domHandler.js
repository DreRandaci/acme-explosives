'use strict';

const buildDom = (allData, e) => {
    $('#output').html('');
    let domString = '';
    allData.forEach((thing) => {        
        if (e.target.innerHTML === thing[0].name) {                          
            domString +=  `<h3>${thing[0].name}</h3>`;                      
            thing[0].categoryTypes.forEach((types) => {          
                domString += `<div class='col-md-12'>`; 
                domString +=`<div class="panel panel-default">`;
                domString +=`<div class="panel-heading clearfix">`;
                domString +=`<h3 class="panel-title pull-left">${types.name}</h3>`;                     
                domString +=  `</div>`;                                                                                  
                thing[0].products.forEach((prod) => {                                        
                    if (prod[0].type === types.id) {
                    domString += `<div class='col-md-4 thumbnail'>`;                                                           
                    domString +=  `<h4>${prod[0].name}</h4>`;
                    domString +=  `<img src=${prod[0].url}>`;
                    domString +=  `<p>${prod[0].description}</p>`;                                         
                    domString += `</div>`;    
                    }
                });
                domString +=  `</div>`;
                domString += `</div>`;
                domString += `</div>`;                 
            });            
        }        
    });
    writeToDom(domString);
};

const writeToDom = (str) => {
    $('#output').append(str);
};

module.exports = {buildDom};
