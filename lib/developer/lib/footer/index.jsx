import { Anchor, Box, Container, List, Title, Text, Grid } from "@mantine/core";

const Footer = () => {
  return (
    <Container my={'xl'}>
      <Grid>
        <Grid.Col span={4}>
          <Box>
            <Text weight={700}>@whilethiscompiles/calendar</Text>
            <Text size={'sm'}>Thanks for stopping by! 👋</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <List listStyleType={'none'} type="unordered">
            <List.Item>
              <Title order={4}>Get Involved</Title>
            </List.Item>
            <List.Item>
              <Anchor size={'sm'} href={'https://github.com/yeahmat/calendar'}>GitHub</Anchor>
            </List.Item>
            <List.Item>
              <Anchor size={'sm'} href={'https://github.com/yeahmat/calendar/issues'}>Open Issues</Anchor>
            </List.Item>
            <List.Item>
              <Anchor size={'sm'} href={'https://github.com/yeahmat/calendar/issues/new'}>Create An Issue</Anchor>
            </List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Footer;