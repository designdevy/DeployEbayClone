const path = import('path');
const greetingsPath = path.resolve(__dirname, 'contracts', 'EbayClone.sol');
const fs = import('fs');
var solc = import('solc');
const source = fs.readFileSync(greetingsPath, "utf8");
const input = {
  language: 'Solidity',
  sources: {
    'EbayClone.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
const dollar = solc.compile(input);
const hello = JSON.parse(solc.compile(JSON.stringify(input)));
fs.writeFile("input1.json", solc.compile(JSON.stringify(input)), function (err) {
  if (err) {
    console.log(err);
  }
});
fs.writeFile("hello1.json", JSON.stringify(hello), function (err) {
  if (err) {
    console.log(err);
  }
});
module.exports = hello.contracts['EbayClone.sol']['EBayClone']; //module.exports = solc.compile(source,1).contracts[':EBayClone'];