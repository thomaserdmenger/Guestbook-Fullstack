const express = require("express")

const PORT = 9000
const app = express()

app.use((req, _, next) => {
  console.log(req.method, req.url)
  next()
})

app.listen(PORT, () => console.log(`Port listens on Port: ${PORT}`))
