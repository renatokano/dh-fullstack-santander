const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function readFileAsync(path, options){
  const promise = new Promise((res,rej) => {
    fs.readFile(path, options, (err,data) => {
      if (err) return rej(err);
      res(data);
    });
  });
  return promise;
}

console.log('Begin');
const promise = readFileAsync(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf-8'})

promise.then((data) => console.log(data))
  .catch((err) => console.error(err));

console.log('End');

//console.log(path.resolve(basePath, 'invictus.txt'))

