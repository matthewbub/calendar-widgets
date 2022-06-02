const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-m lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">@whilethiscompiles/calendar</h1>
            <p className="py-6">
            A simple API intended to return a list of calendar dates for a given year. Built with [day.js](https://day.js.org/) & typescript.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="mockup-code">
        <pre data-prefix="~">
          <code>
            Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui
            et et dolore ratione.
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Home;