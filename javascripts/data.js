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
            console.log('productsArray:', productsArray);          
            allProductData = results[0];
            typesArray = results[1];                                                                                        
            allProductData.forEach((category, index1) => {                 
                category[0].categoryTypes = [];                              
                typesArray.forEach((type, index2) => {                    
                    category.forEach((categoryItem, index3) => {                                                
                        type.forEach((typeItem, index4) => {                                                                                    
                            if (categoryItem.id === typeItem.category) {
                                categoryItem.categoryTypes.push(typeItem);                                
                            }
                        });                    
                    });
                });
            });  
            combineProductsWithData();                                                                                                                                       
        });
        console.log('full categoriesArray:', allProductData);                
    }).catch((error) => {
        console.log('error from Promise.all', error);
    });
};

const combineProductsWithData = () => {
    allProductData.forEach((category, index1) => {
        productsArray.forEach((product, index2) => {
            console.log('product', product);
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
