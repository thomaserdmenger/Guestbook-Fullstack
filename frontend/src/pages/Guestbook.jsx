import Entries from "../components/Entries"
import Form from "../components/Form"
import Header from "../components/Header"

const Guestbook = ({
  fetchedEntries,
  setFetchedEntries,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  email,
  setEmail,
  message,
  setMessage,
  error,
  setError,
  setToggleEdit,
  toggleEdit
}) => {
  return (
    <>
      <Header />
      <main>
        <Form
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
        <Entries
          fetchedEntries={fetchedEntries}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setEmail={setEmail}
          setMessage={setMessage}
          setError={setError}
        />
      </main>
    </>
  )
}

export default Guestbook
