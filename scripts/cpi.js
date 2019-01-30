// Get CPI data

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const appRoot = require('app-root-path').toString();

axios('https://open.alberta.ca/api/3/action/resource_show?id=cfeb0607-bcb3-45e8-8947-59c5a3467118')
  .then(res => {
    axios(res.data.result.url).then(res => {
      fs.writeFileSync(path.resolve(appRoot, 'src/data/cpi.csv'), res.data);
    });
  });
