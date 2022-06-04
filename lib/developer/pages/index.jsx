import { useEffect, useState } from 'react';
import { Stack, Container, Title, Text, JsonInput, NumberInput, Code, SegmentedControl, Divider, Anchor } from '@mantine/core';
import {calendar} from '@whilethiscompiles/calendar'
import { landingMessages } from '../lib/landing.messages';
import { ProppedUpHero } from '../lib/hero';
import InstallSection from '../lib/installsection';

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
      <InstallSection />
      
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
              color="cyan" 
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