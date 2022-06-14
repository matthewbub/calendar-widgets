const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="max-w-lg">        
          <div className="prose">
            <h1 className="text-center">A Calendar SDK</h1>
            <hr />
            <h2>Step 1. Install the SDK</h2>
          </div>
          <div className="mockup-code my-6">
            <pre data-prefix={'%'}><code>npm i @whilethiscompiles/calendar</code></pre>
          </div>
          <div className="prose">
            <h2>Step 2. Implement</h2>
          </div>
          <div className="mockup-code my-6">
            <pre data-prefix={1}><code>{'import {calendar} from \'@whilethiscompiles/calendar\''}</code></pre>
            <pre data-prefix={2}><code>{' '}</code></pre>
            <pre data-prefix={3} className="bg-warning text-warning-content"><code>var demo = calendar(1999)</code></pre>
          </div>
          {/* <p className="py-6">
            Returns a simple list of calendar dates for a given year in JSON format. Built with day.js & typescript.
          </p> */}

        </div>
      </div>
    </div>
  )
}

export default Hero;
