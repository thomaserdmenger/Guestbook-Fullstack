const Teaser = () => {
  return (
    <div>
      <h1 className="home__heading text-5xl text-center mt-20 mb-12 px-8">
        Welcome to Serenity Sands Resort{" "}
      </h1>
      <section className="grid grid-cols-1 max-w-[1440px] m-auto sm:grid-cols-2 xl:grid-cols-3 gap-2 pb-8">
        <div className="w-full h-96 image-1 rounded-lg"></div>
        <div className="w-full h-96 image-2 rounded-lg"></div>
        <div className="w-full h-96 image-3 rounded-lg"></div>
        <div className="w-full h-96 image-4 rounded-lg"></div>
        <div className="w-full h-96 image-5 rounded-lg"></div>
        <div className="w-full h-96 image-6 rounded-lg"></div>
        <div className="w-full h-96 image-7 rounded-lg"></div>
        <div className="w-full h-96 image-8 rounded-lg"></div>
        <div className="w-full h-96 image-9 rounded-lg"></div>
      </section>
    </div>
  )
}

export default Teaser
