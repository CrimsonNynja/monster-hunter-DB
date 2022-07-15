const core = require('@actions/core');
const fs = require('fs');

const { monsters } = JSON.parse(fs.readFileSync('monsters.json'));

let ids = {};
monsters.forEach((item) => {
  if (!item._id) {
    core.setFailed(`id is missing on : ${item.name}`);
  }

  if (ids[item._id['$oid']]) {
    ids[item._id['$oid']] += 1;
  } else {
    ids[item._id['$oid']] = 1;
  }
});


for (const key in ids) {
  if (ids[key] > 1) {
    core.setFailed(`duplicate ID found on: ${key}`);
  }
}
