
const Newsletter = () => (
    <section className="items-center flex flex-col h-96 justify-center bg-gray-400">
      <div className="text-center">
        <h2 className="font-bold mb-8 text-white text-3xl sm:text-4xl">Newsletter</h2>
        <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0" action="">
          <input
            type="email"
            placeholder="your@email.com"
            className="text-center p-2 border-none outline-none sm:text-start"
          />
          <button className="cursor-pointer font-semibold uppercase border-lime-500 p-2 text-xl bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )

export default Newsletter
