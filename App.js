import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import LoginPage from './src/components/Login/LoginPage'
import MoviesCatalog from './src/components/MoviesCatalog/MoviesCatalog'
import MoviePage from './src/components/Movie/MoviePage'
import store from './src/store'
import { colors } from './src/utils/constants'

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: { backgroundColor: '#112DFF' },
  headerTitleStyle: { alignSelf: 'center', textAlign: 'center', color: colors.lightGrey},
  headerTintColor: colors.white,
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }} />
          <Stack.Screen
            name="MoviesCatalog" 
            component={MoviesCatalog} 
            options={{ ...headerOptions,  title: 'Movies Catalog'}}
          />
          <Stack.Screen
            name="MoviePage" 
            component={MoviePage} 
            options={({ route }) => ({ ...headerOptions, title: route.params.original_title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;