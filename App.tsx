import { Provider } from 'react-redux';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorUI from './src/components/calculator/index';
import History from './src/components/history/index';
import { themeControl } from './assets/images';
import { styles } from './styles/styled';
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
            headerTintColor: styles.headerText.color,
            headerTitleStyle: styles.headerText,
          }}
          initialRouteName="Calculator">
          <Stack.Screen
            name="Calculator"
            component={CalculatorUI}
            options={({ navigation, route }) => ({
              headerLeft: () => (
                <TouchableOpacity>
                  <Image source={themeControl} />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('History');
                  }}>
                  <Text style={styles.headerText}>History</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={() => ({
              headerRight: () => (
                <TouchableOpacity>
                  <Text style={styles.headerText}>Clean</Text>
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
