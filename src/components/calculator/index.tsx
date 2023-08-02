import Display from '../display';
import Keypad from '../keypad';
import { TouchableOpacity, Image } from 'react-native';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { themeControl } from '../../../assets/images';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeTheme } from '../../slices/themeSlice';

import Calculator from '../../classes/Calculator';

const calculator = new Calculator();

const CalculatorUI: React.FC = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value)

  const [result, setResult] = useState<string>("0")
  const [inputValue, setInputValue] = useState('')

  const handleButtonPress = (command: Command) => {
    command.execute();
    setInputValue(calculator.buffer)
    setResult(calculator.currentValue!);

  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => {
          dispatch(changeTheme())
        }}>
          <Image source={themeControl} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container backgroundColor={theme.background.backgroundColor}>
      <Display flex={2} resultValue={result} inputValue={inputValue} />
      <Keypad flex={5} handleButtonPress={handleButtonPress} calculator={calculator} />
    </Container>
  );
}

export default CalculatorUI;
