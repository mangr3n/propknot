import * as fs from 'fs';

const data_directory = './data/src';
export const loadData = (dataName) => {
  return JSON.parse(fs.readFileSync(`./data/src/${dataName}.json`));
}