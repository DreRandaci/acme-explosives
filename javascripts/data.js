'use strict';

const dom = require('./domHandler');

let fullArray = [];

const categoriesJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/categories.json").done((data) => {
            resolve(data.categories);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const typesJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/types.json").done((data) => {
            resolve(data.types);    
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

const dataGetter = () => {
    Promise.all([categoriesJSON(), typesJSON()]).then((results) => {
        // console.log('results in productGetter:', results);
        productsJSON().then((products) => {
            fullArray.push(products);
            results.forEach((array) => {
                // console.log('full array in first forEach loop:', array);                
                array.forEach((eachArrayIndex) => {
                    // console.log('eachArrayIndex in second forEach loop:', eachArrayIndex);
                    // eachArrayIndex.index = [];
                    eachArrayIndex.forEach((category) => {
                        // console.log('products in third forEach loop', products);
                        // products.forEach((product) => {
                        //     if (product.id === ) {
                        //         eachArrayIndex.index.push(product);
                        //     }
                        // });
                        // console.log('eachArrayIndex.index:', eachArrayIndex.index);
                        console.log('products before push:', products);
                        console.log('category before push:', category);
                        // console.log('eachArrayIndex before push:', eachArrayIndex);
                        fullArray.push(category);
                        console.log('fullArray:', fullArray);
                    });
                });
            });
        // makeProducts();
        });        
    }).catch((error) => {
        console.log('error from Promise.all', error);
    });
};

const makeProducts = () => {
    // dom(products);
};

const initializer = () => {
    dataGetter();
};

const getProducts = () => {
    return fullArray;
};

module.exports = {initializer, getProducts};
