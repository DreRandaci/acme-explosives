'use strict';

const dom = require('./domHandler');

let products = [];

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

// const allTheCats = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax("./db/catSnacks.json").done((catData) => {
//             resolve(catData.cats);    
//         }).fail((error) => {
//             reject(error);
//         });
//     });
// };

const dataGetter = () => {
    Promise.all([categoriesJSON(), typesJSON()]).then((results) => {
        console.log('results in productGetter:', results);
        // allTheCats().then((cats) => {
        results.forEach((array) => {
            console.log('full array in first forEach loop:', array);
            array.forEach((eachArrayIndex) => {
                console.log('eachArrayIndex in second forEach loop:', eachArrayIndex);
                // thing.snacks = [];
                // types.forEach((products) => {
                //     console.log('products in third forEach loop', products);
        //             cats.forEach((cat) => {
        //                 if (cat.id === catId) {
        //                     dino.snacks.push(cat);
        //                 }
        //             });
                // });
        //         dinosaurs.push(dino);
    });
            });
        // makeProducts();
    // });        
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
    return products;
};

module.exports = {initializer, getProducts};
