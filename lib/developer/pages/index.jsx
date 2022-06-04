import { useEffect, useState } from 'react';
import { Stack, Container, Title, JsonInput, NumberInput, Code, SegmentedControl } from '@mantine/core';
import {calendar} from '@whilethiscompiles/calendar'
import { landingMessages } from '../lib/landing.messages';
import { ProppedUpHero } from '../lib/hero';
const Home = () => {
  const [installValue, setInstallValue] = useState(landingMessages.installFlagNPM);
  const [tryItOutValue, setTryItOutValue] = useState(landingMessages.segmentedControlSdkValue);
  const [demoSdkYear, setDemoSdkYear] = useState(1999);
  const [output, setOutput] = useState(calendar(1999));
  useEffect(() => {
    if(tryItOutValue === landingMessages.segmentedControlSdkValue) {
      setOutput(calendar(demoSdkYear))
    } else {
     
    }
  }, [demoSdkYear, tryItOutValue]);

  return (
    <div>
      <ProppedUpHero />

      <Container size="xs" px="xs" mt='xl'>
        <Stack>
          <Title order={3}>{landingMessages.installHeading}</Title>
          <div>
            <SegmentedControl 
              value={installValue}
              onChange={setInstallValue}
              data={[
                {
                  label: landingMessages.installFlagNPM,
                  value: landingMessages.installFlagNPM
                },
                {
                  label: landingMessages.installFlagYarn,
                  value: landingMessages.installFlagYarn
                }
              ]}
            />
          </div>
          <div>
            {installValue === landingMessages.installFlagNPM ? (
              <Code>{landingMessages.installCommandNPM}</Code>
            ) : (
              <Code>{landingMessages.installCommandYarn}</Code>
            )}
          </div>
        </Stack>
      </Container>
      <Container size="xs" px="xs" mt='xl'>
        <Stack>
          <Title order={3}>{landingMessages.tryItOutHeading}</Title>
          <div>
            <NumberInput
              label={landingMessages.yearInputLabel}
              description={landingMessages.yearInputSubLabel}
              min={1970}
              max={3000}
              value={demoSdkYear}
              onChange={setDemoSdkYear}
            />
          </div>
          <div>
            <SegmentedControl 
              value={tryItOutValue}
              onChange={setTryItOutValue}
              data={[
                {
                  label: landingMessages.segmentedControlSdkLabel, 
                  value: landingMessages.segmentedControlSdkValue
                },
                {
                  label: landingMessages.segmentedControlApiLabel, 
                  value: landingMessages.segmentedControlApiValue
                }
              ]}
            />
          </div>
          <Code block>{
            tryItOutValue === landingMessages.segmentedControlSdkValue 
            ? landingMessages.outputPreviewSDK(demoSdkYear)
            : landingMessages.outputPreviewAPI(demoSdkYear)
          }</Code>
          <JsonInput
            minRows={14}
            onChange={setOutput}
            value={JSON.stringify(output, null, 2)}
          />
        </Stack>
      </Container>
    </div>
  )
}

export default Home;