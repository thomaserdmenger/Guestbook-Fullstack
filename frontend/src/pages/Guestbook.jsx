import Entries from "../components/Entries"
import Form from "../components/Form"
import Header from "../components/Header"

const Guestbook = ({ fetchedEntries, setFetchedEntries }) => {
  return (
    <>
      <Header />
      <main>
        <Form setFetchedEntries={setFetchedEntries} />
        <Entries fetchedEntries={fetchedEntries} />
      </main>
    </>
  )
}

export default Guestbook
