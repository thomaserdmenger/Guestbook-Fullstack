const fs = require("node:fs")

const readFileFn = () => {
  return new Promise((res, rej) => {
    fs.readFile(__dirname + "/data/entries.json", (err, data) => {
      if (err) return rej(err)
      res(JSON.parse(data))
    })
  })
}

const writeFileFn = (data) => {
  return new Promise((res, rej) => {
    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile(__dirname + "/data/entries.json", jsonData, (err) => {
      if (err) return rej(err)
      res(data)
    })
  })
}

module.exports = { readFileFn, writeFileFn }
