import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guestbook from "./pages/Guestbook"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
