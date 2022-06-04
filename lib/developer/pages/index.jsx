import { useEffect, useState } from 'react';
import { 
  Stack, 
  Container, 
  Title, 
  JsonInput,
  NumberInput, 
  Text,
  Code,
  SegmentedControl,
  Anchor,
  Center,
  Button,
  Group
} from '@mantine/core';
import {calendar} from '@whilethiscompiles/calendar'
import {BrandGithub,BrandOpenSource} from 'tabler-icons-react';
import { landingMessages } from '../lib/landing.messages';
const Home = () => {
  const [installValue, setInstallValue] = useState(landingMessages.installFlagNPM);
  const [tryItOutValue, setTryItOutValue] = useState(landingMessages.segmentedControlSdkValue);
  const [demoSdkYear, setDemoSdkYear] = useState(1999);
  const [output, setOutput] = useState(calendar(1999));

  useEffect(() => {
    setOutput(calendar(demoSdkYear))
  }, [demoSdkYear]);
  return (
    <div>
      <Container size="xs" px="xs" my='xl' style={{height: '500px'}}>
        <Center style={{height: '100%'}}>
          <Stack align="center" justify="center">
            <Title order={1}>{landingMessages.pageTitle}</Title>
            <Text size="lg" align="center">{landingMessages.pageDescription()}</Text>
            <Group>
              <Button 
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href={landingMessages.primaryButtonHref}
                leftIcon={<BrandGithub size={18} />}
                color="cyan"
              >
                {landingMessages.primaryButtonLabel}
              </Button>
              <Button               
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href={landingMessages.secondaryButtonHref}
                leftIcon={<BrandOpenSource size={18} />}
                color="cyan"
                variant='outline'
              >
                {landingMessages.secondaryButtonLabel}
              </Button>
            </Group>
          </Stack>
        </Center>
      </Container>

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
          <Code block>{landingMessages.outputPreviewSDK(demoSdkYear)}</Code>
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