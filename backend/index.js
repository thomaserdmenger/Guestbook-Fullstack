const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const { v4 } = require("uuid")
const { body, validationResult } = require("express-validator")
const { readFileFn, writeFileFn } = require("./utils.js")

dotenv.config()

const PORT = process.env.PORT
const app = express()

// Log Request Informaton with Morgan Middleware
app.use(morgan("dev"))

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

// DeleteOne
app.delete("/api/v1/guestbook/entries/:id", (req, res) => {
  const entryId = req.params.id

  readFileFn()
    .then((data) => data.filter((item) => item.id.toString() !== entryId))
    .then((updatedData) => writeFileFn(updatedData))
    .then((updatedData) => res.json(updatedData))
    .catch((err) => res.status(500).json({ err }))
})

// UpdateOne
app.patch("/api/v1/guestbook/entries/:id", (req, res) => {
  const entryId = req.params.id
  const updadetEntry = req.body

  readFileFn()
    .then((data) =>
      data.map((item) => {
        if (item.id.toString() === entryId) {
          return {
            ...item,
            ...updadetEntry
          }
        } else {
          return item
        }
      })
    )
    .then((updadetData) => writeFileFn(updadetData))
    .then((updadetData) => res.json(updadetData))
    .catch((err) => res.status(500).json({ err }))
})

app.listen(PORT, () => console.log("Server listens"))
