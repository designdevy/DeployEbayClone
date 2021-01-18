import path from 'path';
//import meta
console.log(JSON.stringify(import.meta));

const moduleURL = new URL(import.meta.url);

//pathname ${moduleURL.pathname}
console.log(`1 pathname ${moduleURL.pathname}`);
//dirname ${path.dirname(moduleURL.pathname)}
console.log(`2 dirname ${path.dirname(moduleURL.pathname)}`);

const __dirname = path.dirname(moduleURL.pathname);
//dirname
console.log(__dirname);

const greetingsPath = path.resolve(__dirname,'contracts','EbayClone.sol');
//greetings path
console.log(path.resolve(__dirname,'contracts','EbayClone.sol'))