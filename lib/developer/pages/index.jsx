import {
  AppBackground,
  Container,
  CustomComponent,
  Footer,
  Heading,
  Hero,
  NavBar,
  Text
} from '../lib/components';

const Home = () => (
  <AppBackground>
    <Hero />   
    {/* <NavBar />
    <Container>
      <CustomComponent className='w-full sm:w-8/12 md:w-6/12 mx-auto prose'>
        <Heading root={'h2'}>Install SDK ⭐</Heading>
        <Text>To install directly from the npm registry, run one of the following commands from your preferred Terminal.</Text>
        <Text>To learn more about this package & it's presence in the npm registry, such as downloads per week and current build size click here.</Text>

        <Heading root={'h2'}>Try It Out</Heading>
        <Text>A quick demo should be all it takes to capture the gist of the SDK.</Text>
      </CustomComponent>
    </Container>
    <Footer /> */}
  </AppBackground>
)

export default Home;