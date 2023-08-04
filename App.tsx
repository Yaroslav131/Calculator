import { Provider } from 'react-redux';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,NativeStackNavigationProp  } from '@react-navigation/native-stack';

import CalculatorScren from './src/screns/calculator';
import HistoryScreen from './src/screns/history';
import { globalStyles } from './styles/globalStyles';
import store from './src/store/store';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: globalStyles.headerText.color,
            headerTitleStyle: globalStyles.headerText,
          }}
          initialRouteName="Calculator">
          <Stack.Screen
            name="Calculator"
            component={CalculatorScren}
            options={({ navigation, route }) => ({

              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('History');
                  }}>
                  <Text style={globalStyles.headerText}>History</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
