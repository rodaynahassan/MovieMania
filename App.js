import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TabNavigator from './src/navigation/TabNavigator';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <TabNavigator />
    </StoreProvider>
  );
};

export default App;
