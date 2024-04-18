const Entries = ({ fetchedEntries }) => {
  return (
    <div className="w-5/6 mt-20 max-w-[1440px] m-auto pb-12 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      {fetchedEntries.map((entry) => {
        return (
          <article className="flex flex-col mb-4 px-6 py-4 shadow-lg" key={entry.id}>
            <h2 className="guestbook__title flex flex-col justify-center mb-1 md:flex-row md:justify-start md:gap-2">
              <span className="font-bold">{`${entry.firstname} ${entry.lastname}`}</span>{" "}
              {entry.timestamp}
            </h2>
            <p>{entry.message}</p>
          </article>
        )
      })}
    </div>
  )
}

export default Entries
