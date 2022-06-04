import { MantineProvider } from '@mantine/core';

const myTheme = {  
  // white: '#F0F0F0',  
};

function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
       <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;