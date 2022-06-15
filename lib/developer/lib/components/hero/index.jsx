import clsx from "clsx"
import Heading from "../heading";

const Prose = ({root, className, children, ...rest}) => {
  const Root = root ? root : 'div';
  return (
    <Root className={clsx("prose", className && className)} {...rest}>
      {children}
    </Root>
  )
};

const Hero = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 flex pt-12">
      <div className="w-1/4 pr-4">
        <div className="sticky top-12">
          <Prose className="pb-8">
            <Heading root="h2">A Calendar SDK</Heading>
            <hr />
          </Prose>
          <ul className="menu">
            <li><a className="active rounded">Getting Started</a></li>
            <li><a className="rounded">Documentation</a></li>
            <li><a className="rounded">Road Map</a></li>
            <li><a className="rounded">Change Log</a></li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <Prose className="mb-8">
          <Heading>A Calendar SDK by @whilethiscompiles</Heading>
          <hr />
        </Prose>
        <Prose>
          <Heading root="h2">Road Map</Heading>
          <p>Here's the current road map. Working Toward's A Localized Tomorrow.</p>
        </Prose>
        <ul className="steps steps-vertical whitespace-nowrap">
          <li data-content="✓" className="step step-primary">
            <Prose>
              <p>Calendar Years as JSON</p>
            </Prose>
          </li>
          <li data-content="●" className="step step-primary whitespace-nowrap">
            <Prose>
              <p className="whitespace-nowrap">
                Localize According To {' '}
                <a className="inline" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat">
                  Intl.DateTimeFormat
                </a>
              </p>
            </Prose>
          </li>
          <li className="step">
            <Prose>Calendar Ranges</Prose>
          </li>
          <li className="step">
            <Prose>More...</Prose>
          </li>
        </ul>
        <Prose>
          <p>At some point it'd be awesome to incorporate some UI Calendar Components in such a way that we could be presentable as a alternative to other popular open source services. We've got a long way to go before that! </p>
        </Prose>
        <Prose>
          <Heading root="h2">Step 1. Install the SDK</Heading>
          <p>The package lives in the <a href="https://www.npmjs.com/package/@whilethiscompiles/calendar">NPM Registry</a>, and can be installed via <code>npm</code> or <code>yarn</code> as preferred.</p>
        </Prose>
        <div className="mockup-code my-6">
          <pre data-prefix={'%'}><code>npm i @whilethiscompiles/calendar</code></pre>
        </div>
        <Prose>
          <Heading root="h2">Step 2. Implement</Heading>
        </Prose>
        <div className="mockup-code my-6">
          <pre data-prefix={1}><code>{'import {calendar} from \'@whilethiscompiles/calendar\''}</code></pre>
          <pre data-prefix={2}><code>{' '}</code></pre>
          <pre data-prefix={3}><code>var demo = calendar(1999)</code></pre>
        </div>
      </div>
    </div>
  )
}

export default Hero;
