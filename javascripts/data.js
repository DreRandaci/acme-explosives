'use strict';

const dom = require('./domHandler');

let allProductData = [];
let typesArray = [];
let productsArray = [];

const categoriesJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/categories.json").done((data) => {
            resolve(data.categories);
            allProductData = data.categories;        
        }).fail((error) => {
            reject(error);
        });
    });
};

const typesJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/types.json").done((data) => {
            resolve(data.types); 
            typesArray = data.types;   
        }).fail((error) => {
            reject(error);
        });
    });
};

const productsJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/products.json").done((data) => {
            resolve(data.products);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const combineData = () => {
    Promise.all([categoriesJSON(), typesJSON()]).then((results) => {        
        productsJSON().then((products) => { 
            productsArray = products;                
            allProductData = results[0];
            typesArray = results[1];                                                                                        
            allProductData.forEach((category) => {                 
                category[0].categoryTypes = [];                              
                typesArray.forEach((type) => {                    
                    category.forEach((categoryItem) => {                                                
                        type.forEach((typeItem) => {                                                                                    
                            if (categoryItem.id === typeItem.category) {
                                categoryItem.categoryTypes.push(typeItem);                                
                            }
                        });                    
                    });
                });
            });  
            combineProductsWithData();                                                                                                                                       
        });
    }).catch((error) => {
        console.log('error from Promise.all', error);
    });
};

const combineProductsWithData = () => {    
    allProductData.forEach((category) => {        
        category[0].products = [];                        
        productsArray.forEach((product) => {         
            category.forEach((cat) => {
                product.forEach((item) => {                           
                    if (cat.id === item.type) {
                        cat.products.push(product);
                    }    
                });                                             
            });          
        });
    });    
};

const initializer = () => {
    combineData();
};

const getAllData = () => {
    return allProductData;
};

module.exports = {initializer, getAllData};
