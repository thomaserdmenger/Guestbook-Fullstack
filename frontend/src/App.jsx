import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guestbook from "./pages/Guestbook"
import Admin from "./pages/Admin"

function App() {
  const [fetchedEntries, setFetchedEntries] = useState([])
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [toggleEdit, setToggleEdit] = useState(false)
  const [entryId, setEntryId] = useState("")

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/guestbook/entries")
      .then((res) => res.json())
      .then((data) => setFetchedEntries(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/guestbook"
          element={
            <Guestbook
              fetchedEntries={fetchedEntries}
              setFetchedEntries={setFetchedEntries}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              email={email}
              setEmail={setEmail}
              message={message}
              setMessage={setMessage}
              error={error}
              setError={setError}
              setToggleEdit={setToggleEdit}
              toggleEdit={toggleEdit}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              fetchedEntries={fetchedEntries}
              setFetchedEntries={setFetchedEntries}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              email={email}
              setEmail={setEmail}
              message={message}
              setMessage={setMessage}
              error={error}
              setError={setError}
              setToggleEdit={setToggleEdit}
              toggleEdit={toggleEdit}
              entryId={entryId}
              setEntryId={setEntryId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
