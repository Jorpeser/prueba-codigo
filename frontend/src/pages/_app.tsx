import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

//import thunk from 'redux-thunk';
import reducers from '../reducers';

import theme from '../theme'
import { AppProps } from 'next/app'

//const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = configureStore({
  reducer: reducers
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ChakraProvider>
  )
}

export default MyApp
