import { useEffect, useState } from 'react';
import { Stack, Container, Title, JsonInput, NumberInput, Code, SegmentedControl} from '@mantine/core';
import {calendar} from '@whilethiscompiles/calendar'
import { tryItMsgs } from './tryitsection.msg';

const fetchCalendar = async (year) => {
  const res = await fetch('https://calendar.whilethiscompiles.com/api/calendar?year=' + year)
  return await res.json()
}
const TryItSection = () => {
  const [tryItOutValue, setTryItOutValue] = useState(tryItMsgs.segmentedControlSdkValue);
  const [demoSdkYear, setDemoSdkYear] = useState(1999);
  const [output, setOutput] = useState(calendar(1999));
  

  useEffect(() => {
    setOutput({
      "status": {
        "message": "loading..."
      }
    })

    if(tryItOutValue === tryItMsgs.segmentedControlSdkValue) {
      setOutput(calendar(demoSdkYear))
    } else {
      fetchCalendar(demoSdkYear).then((res) => setOutput(res))
    }
  }, [demoSdkYear, tryItOutValue]);

  return (
    <Container size="xs" px="xs" mt='xl'>
      <Stack>
        <Title order={3}>{tryItMsgs.tryItOutHeading}</Title>
        <div>
          <NumberInput
            label={tryItMsgs.yearInputLabel}
            description={tryItMsgs.yearInputSubLabel}
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
                label: tryItMsgs.segmentedControlSdkLabel, 
                value: tryItMsgs.segmentedControlSdkValue
              },
              {
                label: tryItMsgs.segmentedControlApiLabel, 
                value: tryItMsgs.segmentedControlApiValue
              }
            ]}
          />
        </div>
        <Code block>{
          tryItOutValue === tryItMsgs.segmentedControlSdkValue 
          ? tryItMsgs.outputPreviewSDK(demoSdkYear)
          : tryItMsgs.outputPreviewAPI(demoSdkYear)
        }</Code>
        <JsonInput
          minRows={14}
          onChange={setOutput}
          value={JSON.stringify(output, null, 2)}
        />
      </Stack>
    </Container>
  )
}

export default TryItSection;