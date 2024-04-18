const Entries = ({ fetchedEntries }) => {
  return (
    <div className="w-full px-14 mt-20 max-w-[14400px] m-auto pb-12">
      {fetchedEntries.map((entry) => {
        return (
          <article className="flex flex-col mb-4" key={entry.id}>
            <h2 className="guestbook__title flex items-center gap-2 mb-1">
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
