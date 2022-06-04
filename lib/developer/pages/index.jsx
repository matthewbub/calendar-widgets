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
const Home = () => {
  const [installValue, setInstallValue] = useState('npm');
  const [tryItOutValue, setTryItOutValue] = useState('sdk');
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
            <Title order={1}>@whilethiscompiles/calendar</Title>
            <Text size="lg" align="center">
            A simple API intended to return a list of calendar dates for a given year. Built with <Anchor href="https://day.js.org/" target="_blank">day.js</Anchor> & typescript.
            </Text>
            <Group>
              <Button 
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yeahmat/calendar"
                leftIcon={<BrandGithub size={18} />}
                color="cyan"
              >
                GitHub
              </Button>
              <Button               
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yeahmat/calendar/issues"
                leftIcon={<BrandOpenSource size={18} />}
                color="cyan"
                variant='outline'
              >
                Open Source
              </Button>
            </Group>
          </Stack>
        </Center>
      </Container>

      <Container size="xs" px="xs" mt='xl'>
        <Stack>
          <Title order={3}>Install</Title>
          <div>
            <SegmentedControl 
              value={installValue}
              onChange={setInstallValue}
              data={[
                {label: 'npm', value: 'npm'},
                {label: 'yarn', value: 'yarn'}
              ]}
            />
          </div>
          <div>
            {installValue === "npm" ? (
              <Code>npm install @whilethiscompiles/calendar</Code>
            ) : (
              <Code>yarn add @whilethiscompiles/calendar</Code>
            )}
          </div>
        </Stack>
      </Container>
      <Container size="xs" px="xs" mt='xl'>
        <Stack>
          <Title order={3}>Try it out</Title>
          <div>
            <NumberInput
              label="Enter Year"
              description="Get a list of dates for a given year."
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
                {label: 'SDK', value: 'sdk'},
                {label: 'REST API', value: 'restapi'}
              ]}
            />
          </div>
          <Code block>{`import {calendar} from '@whilethiscompiles/calendar';

calendar(${demoSdkYear})`}
          </Code>
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