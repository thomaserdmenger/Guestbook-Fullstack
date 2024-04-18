const express = require("express")
const cors = require("cors")
const { v4 } = require("uuid")
const { body, validationResult } = require("express-validator")
const { readFileFn, writeFileFn } = require("./utils.js")

const PORT = 9000
const app = express()

app.use((req, _, next) => {
  console.log(req.method, req.url)
  next()
})

// Body Parser Middleware
app.use(express.json())

// Address Access-to-Fetch-Problem
app.use(cors())

// ReadAll Endpoint
app.get("/api/v1/guestbook/entries", (_, res) => {
  readFileFn()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ err }))
})

// PostOne Endpoint
app.post(
  "/api/v1/guestbook/entries",
  body("firstname").notEmpty(),
  body("lastname").notEmpty(),
  body("email").notEmpty(),
  body("message").notEmpty(),
  (req, res) => {
    const result = validationResult(req)

    if (!result.isEmpty()) {
      return res.status(400).json({ message: "Please fill in all fields", error: result.array() })
    }

    newEntry = {
      id: v4(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      message: req.body.message,
      email: req.body.email,
      timestamp: `${new Date(Date.now()).toLocaleString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })} Uhr`
    }

    readFileFn()
      .then((data) => [newEntry, ...data])
      .then((newData) => writeFileFn(newData))
      .then((newData) => res.json(newData))
      .catch((err) => res.status(500).json({ err }))
  }
)

app.listen(PORT, () => console.log(`Port listens on Port: ${PORT}`))
