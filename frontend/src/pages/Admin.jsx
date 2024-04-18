import Entries from "../components/Entries"
import Form from "../components/Form"
import Header from "../components/Header"

const Admin = ({ fetchedEntries, setFetchedEntries }) => {
  return (
    <>
      <Header />
      <main>
        <Form />
        <Entries fetchedEntries={fetchedEntries} setFetchedEntries={setFetchedEntries} />
      </main>
    </>
  )
}

export default Admin
