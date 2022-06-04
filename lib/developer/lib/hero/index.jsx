/** Dependencies */
import {isEmpty} from 'lodash';

/** Components */
import { Stack, Container, Title, Text, Center, Button, Group } from '@mantine/core';
import {BrandGithub,BrandOpenSource} from 'tabler-icons-react';

/** Messages */
import {heroMsgs} from './hero.msg';

/** Component */
const Hero = ({
  title = '',
  desc = '',
  primaryButton,
  secondaryButton
}) => (
  <div>
    <Container size="xs" px="xs" my='xl' style={{height: '500px'}}>
      <Center style={{height: '100%'}}>
        <Stack align="center" justify="center">
          {!isEmpty(title) && (<Title order={1}>{title}</Title>)}
          {!isEmpty(desc) && (<Text size="lg" align="center">{desc}</Text>)}
          <Group>
            {!isEmpty(primaryButton) && primaryButton}
            {!isEmpty(secondaryButton) && secondaryButton}
          </Group>
        </Stack>
      </Center>
    </Container>
  </div>
);

/** Component w/ Static Props */
export const ProppedUpHero = () => (
  <Hero 
    title={heroMsgs.title}
    desc={heroMsgs.desc()}
    primaryButton={(
      <Button 
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={heroMsgs.primaryBtnHref}
        leftIcon={<BrandGithub size={18} />}
        color="cyan"
      >
        {heroMsgs.primaryBtnLabel}
      </Button>
    )}
    secondaryButton={(
      <Button               
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={heroMsgs.secondaryBtnHref}
        leftIcon={<BrandOpenSource size={18} />}
        color="cyan"
        variant='outline'
      >
        {heroMsgs.secondaryBtnLabel}
      </Button>
    )}
  />
);

export default Hero;