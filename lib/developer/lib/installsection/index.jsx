import { useState } from 'react';
import { Stack, Container, Title, Text, Code, SegmentedControl, Divider, Anchor } from '@mantine/core';
import { installSectionMsgs } from './installsection.msg';


const InstallSection = () => {
  const [installValue, setInstallValue] = useState(installSectionMsgs.installFlagNPM);  
  return (
    <Container size="xs" px="xs" mt='xl'>
      <Stack>
        <Title order={3}>{installSectionMsgs.installHeading}</Title>          
        <Text size='sm'>{installSectionMsgs.labelBeforeInstall}</Text>
        <div>
          <SegmentedControl
            color="cyan"
            value={installValue}
            onChange={setInstallValue}
            data={[
              { label: installSectionMsgs.installFlagNPM, value: installSectionMsgs.installFlagNPM },
              { label: installSectionMsgs.installFlagYarn, value: installSectionMsgs.installFlagYarn }
            ]}
          />
        </div>          
        <div>
          {installValue === installSectionMsgs.installFlagNPM 
            ? (<Code block>{installSectionMsgs.installCommandNPM}</Code>) 
            : (<Code block>{installSectionMsgs.installCommandYarn}</Code>)
          }
        </div>
        <Text size='sm'>
          {installSectionMsgs.labelAfterInstall}
          <Anchor href='https://www.npmjs.com/package/@whilethiscompiles/calendar' target='_blank' size='sm'>{'click here.'}</Anchor>
        </Text>
        <Divider my="sm" variant="dashed" />
      </Stack>
    </Container>
  )
}

export default InstallSection;