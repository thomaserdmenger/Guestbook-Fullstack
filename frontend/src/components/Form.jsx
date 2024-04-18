import { useState } from "react"
import { useLocation } from "react-router-dom"

const Form = ({ setFetchedEntries }) => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEntry = {
      firstname,
      lastname,
      email,
      message
    }

    fetch("http://localhost:9000/api/v1/guestbook/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Please fill in all fields") {
          return setError(data)
        }

        setFetchedEntries(data)
      })
      .catch((err) => console.log(err))

    setFirstname("")
    setLastname("")
    setEmail("")
    setMessage("")
    setError("")
  }
  return (
    <div className="flex flex-col">
      {location.pathname === "/admin" ? (
        <h1 className="text-center mt-8 mb-10 guestbook__heading text-5xl">Admin Area</h1>
      ) : (
        <h1 className="text-center mt-8 mb-10 guestbook__heading text-5xl">Before You Go</h1>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 w-4/5 m-auto max-w-screen-sm">
        <input
          className="border-[1.5px] rounded p-1 w-full"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className="border-[1.5px] rounded p-1 w-full"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          className="border-[1.5px] rounded p-1 w-full"
          type="email"
          name="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-[1.5px] rounded p-1 h-20 mb-2 w-full"
          type="text"
          name="message"
          placeholder="Leave a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="border-[1.5px] p-2 rounded-full border-none bg-[#B2E6D1] text-white font-bold w-full"
          type="submit">
          Add message
        </button>
        {error && <p className="text-red-500 font bold text-lg">{error.message}</p>}
      </form>
    </div>
  )
}

export default Form
