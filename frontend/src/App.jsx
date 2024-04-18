import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guestbook from "./pages/Guestbook"

function App() {
  const [fetchedEntries, setFetchedEntries] = useState([])

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
            <Guestbook fetchedEntries={fetchedEntries} setFetchedEntries={setFetchedEntries} />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
