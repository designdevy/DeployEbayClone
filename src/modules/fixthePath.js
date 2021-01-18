import path from 'path';
import url from 'url';
//import meta
console.log("metaJsonStringify",JSON.stringify(import.meta));
//console.log(import.meta);
const moduleURL = new URL(import.meta.url);
console.log("URL", moduleURL)
console.log(`1 pathname ${moduleURL.pathname}`);
console.log(`2 dirname ${path.dirname(moduleURL.pathname)}`);
//const __dirname =path.dirname(moduleURL.pathname)
//.log(`3, ${__dirname}`);
//console.log(url.fileURLToPath(__dirname))
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(`3, ${__dirname}`);

