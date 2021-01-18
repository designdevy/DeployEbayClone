import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(`3, ${__dirname}`);

/* import path from 'path'; */
import fs from 'fs'
import solc from 'solc'
/* const moduleURL = new URL(import.meta.url);
console.log(`2 dirname ${path.dirname(moduleURL.pathname)}`);
//const __dirname = path.dirname(moduleURL.pathname)
const __dirname =path.dirname(moduleURL.pathname)
console.log(`3 ${__dirname}`); */
const greetingsPath = __dirname+'/contracts/EbayClone.sol'
//const greetingsPath = path.resolve('src\\modules\\contracts','EbayClone.sol');
//console.log(path.resolve(__dirname,'contracts','EbayClone.sol'))
//const fs = require('fs'); 
//import fs from 'fs'
//var solc= require('solc')
const source = fs.readFileSync(greetingsPath,'utf-8' );
console.log(source)
const input = {
    language: 'Solidity',
    sources:{
        'EbayClone.sol':{
            content: source,
        },
    },
    settings:{
        outputSelection:{
            '*': {
                '*' : ['*'],
            },
        },
    },
};
const dollar = solc.compile(input);
const solcJson = JSON.parse(solc.compile(JSON.stringify(input)));
const output = solcJson.contracts['EbayClone.sol']['EBayClone'];
export {output}

//const hello = JSON.parse(solc.compile(JSON.stringify(input)));
/* fs.writeFile("input1.json",solc.compile(JSON.stringify(input)), function(err) {
    if (err) {
        console.log(err);
    }
}); */
/* fs.writeFile("hello1.json",JSON.stringify(hello), function(err) {
    if (err) {
        console.log(err);
    }
}); */
//export const output = hello.contracts['EbayClone.sol']['EBayClone'];
//module.exports = solc.compile(source,1).contracts[':EBayClone'];