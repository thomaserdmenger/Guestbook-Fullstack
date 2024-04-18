import Entries from "../components/Entries"
import Form from "../components/Form"
import Header from "../components/Header"

const Admin = ({
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
  toggleEdit,
  setToggleEdit,
  entryId,
  setEntryId
}) => {
  return (
    <>
      <Header />
      <main>
        <Form
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
          setFetchedEntries={setFetchedEntries}
          setToggleEdit={setToggleEdit}
          entryId={entryId}
          setEntryId={setEntryId}
        />
        <Entries
          fetchedEntries={fetchedEntries}
          setFetchedEntries={setFetchedEntries}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setEmail={setEmail}
          setMessage={setMessage}
          setError={setError}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
          entryId={entryId}
          setEntryId={setEntryId}
        />
      </main>
    </>
  )
}

export default Admin
