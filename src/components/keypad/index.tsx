import { View, Image } from 'react-native';
import CustomButton from './button';
import { ColumnContainer, RowContainer, styles } from './styles';
import KeypadFlatList from './keypadFlatList';
import { backDeleteImg } from '../../../assets/images';
import {
  buttonNumberFlatList,
  clearnButton,
  incrimentButtons,
  numberButtons,
} from '../../constants/buttons';
import { useAppSelector } from '../../hooks/reduxHooks';
import Calculator from '../../classes/Calculator';
import {
  EqualsCommand,
  CleanCommand,
  DeleteCommand,
  ChangeSignCommand,
  AddCommand
} from '../../classes/Commands';

interface KeypadProps {
  flex: number;
  handleButtonPress: (comand: Command) => void
  calculator: Calculator
}

function Keypad(props: KeypadProps) {
  const theme = useAppSelector((state) => state.theme.value)

  const topKeypadButtonsData = [
    {
      onPress: () => props.handleButtonPress(new ChangeSignCommand(props.calculator)),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        theme.keypadButtons.button.buttonStyle,
        styles.smallButonStyle,
      ],
      title: incrimentButtons.plusMinus,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.leftParenthesis)),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.leftParenthesis,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.rightParenthesis)),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.rightParenthesis,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.percent)),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.percent,
    },
    {
      onPress: () => props.handleButtonPress(new CleanCommand(props.calculator)),
      textColor: theme.keypadButtons.deleteButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.deleteButton.buttonStyle,
      ],
      title: clearnButton,
    },
    {
      onPress: () => props.handleButtonPress(new DeleteCommand(props.calculator)),
      textColor: theme.keypadButtons.deleteButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.deleteButton.buttonStyle,
      ],
      image: backDeleteImg,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.divide)),
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.divide,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.multiply)),
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.multiply,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, numberButtons.seven)),
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.seven,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, numberButtons.eight)),
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.eight,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, numberButtons.nine)),
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.nine,
    },
    {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.minus)),
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.minus,
    },
  ];

  const bottomKeypadButtonsData = buttonNumberFlatList.map(title => {
    return {
      onPress: () => props.handleButtonPress(new AddCommand(props.calculator, title)),
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title,
    };
  });

  return (
    <View
      style={[styles.keypadContainer, theme.background, { flex: props.flex }]}>
      <View style={styles.keypadContainer}>
        <KeypadFlatList numColumn={4} data={topKeypadButtonsData} />

        <ColumnContainer>
          <RowContainer>
            <KeypadFlatList numColumn={3} data={bottomKeypadButtonsData} />

            <View style={styles.horizontalContainer}>
              <CustomButton
                onPress={() => props.handleButtonPress(new AddCommand(props.calculator, numberButtons.zero))}
                textStyle={theme.keypadButtons.button.textColor}
                buttonStyle={[
                  styles.largeButonStyle,
                  theme.keypadButtons.button.buttonStyle,
                ]}
                title={numberButtons.zero}
              />
              <CustomButton
                onPress={() => props.handleButtonPress(new AddCommand(props.calculator, numberButtons.dot))}
                textStyle={theme.keypadButtons.button.textColor}
                buttonStyle={[
                  styles.butonStyle,
                  theme.keypadButtons.button.buttonStyle,
                ]}
                title={numberButtons.dot}
              />
            </View>
          </RowContainer>
          <RowContainer>
            <CustomButton
              onPress={() => props.handleButtonPress(new AddCommand(props.calculator, incrimentButtons.plus))}
              textStyle={theme.keypadButtons.incrementButton.textColor}
              buttonStyle={[
                styles.fillButonStyle,
                theme.keypadButtons.incrementButton.buttonStyle,
              ]}
              title={incrimentButtons.plus}
            />
            <CustomButton
              onPress={() => props.handleButtonPress(new EqualsCommand(props.calculator))}
              textStyle={theme.keypadButtons.resultButton.textColor}
              buttonStyle={[
                styles.fillButonStyle,
                theme.keypadButtons.resultButton.buttonStyle,
              ]}
              title={incrimentButtons.result}
            />
          </RowContainer>
        </ColumnContainer>
      </View>
    </View>
  );
}

export default Keypad;
