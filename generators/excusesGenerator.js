const { contexts, 
        situations, 
        reasons, 
        emotions 
} = require("../data/excusesData");

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function generateExcuse(){
    return `${random(contexts)} ${random(situations)} ${random(reasons)}, ${random(emotions)}.`;
}

module.exports = generateExcuse;