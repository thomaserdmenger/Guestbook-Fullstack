import { useLocation } from "react-router-dom"
import { MdDeleteOutline } from "react-icons/md"

const Entries = ({ fetchedEntries, setFetchedEntries }) => {
  const location = useLocation()

  const handleDelete = (entry) => {
    fetch(`http://localhost:9000/api/v1/guestbook/entries/${entry.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => setFetchedEntries(data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="w-5/6 mt-20 max-w-[1440px] m-auto pb-12 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      {fetchedEntries.map((entry) => {
        return (
          <article className="flex flex-col mb-4 px-6 py-4 shadow-lg" key={entry.id}>
            <div className="flex justify-between">
              <h2 className="guestbook__title flex flex-col justify-center mb-1 md:flex-row md:justify-start md:gap-2">
                <span className="font-bold">{`${entry.firstname} ${entry.lastname}`}</span>{" "}
                {entry.timestamp}
              </h2>
              {location.pathname === "/admin" && (
                <MdDeleteOutline onClick={() => handleDelete(entry)} className="cursor-pointer" />
              )}
            </div>
            <p>{entry.message}</p>
          </article>
        )
      })}
    </div>
  )
}

export default Entries
