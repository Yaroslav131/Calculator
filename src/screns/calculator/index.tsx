/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Display from '../../components/display';
import Keypad from '../../components/keypad';
import { themeControl } from '../../../assets/images';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeTheme } from '../../slices/themeSlice';
import Calculator from '../../classes/Calculator';
import { addToHistory } from '../../slices/historySlice';
import { Command, HistoryType } from '../../types';

import { Container } from './styles';

const calculator = new Calculator();

interface CalculatorScrenProps {
  navigation: NativeStackNavigationProp<any, any>
}

function CalculatorScren({ navigation }: CalculatorScrenProps) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  const [result, setResult] = useState<string>(calculator.currentValue!);
  const [inputValue, setInputValue] = useState(calculator.buffer);
  const [isInput, setIsInput] = useState(true);

  const handleButtonPress = (command: Command) => {
    command.execute();
    setInputValue(calculator.buffer);
    setResult(calculator.currentValue!);
    setIsInput(true);
  };

  const handleResultButtonPress = () => {
    setIsInput(false);

    const history: HistoryType = {
      inputValue: calculator.buffer,
      resultValue: calculator.currentValue!,
    };

    dispatch(addToHistory(history));
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => {
          dispatch(changeTheme());
        }}
        >
          <Image source={themeControl} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, dispatch]);

  return (
    <Container backgroundColor={theme.background.backgroundColor}>
      <Display
        isInput={isInput}
        flex={2}
        resultValue={result}
        inputValue={inputValue}
      />
      <Keypad
        propsFlex={5}
        handleResultButtonPress={handleResultButtonPress}
        handleButtonPress={handleButtonPress}
        calculator={calculator}
      />
    </Container>
  );
}

export default CalculatorScren;
