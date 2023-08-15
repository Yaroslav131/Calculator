import { View } from 'react-native';
import React from 'react';

import CustomButton from './button';
import { ColumnContainer, RowContainer, styles } from './styles';
import KeypadFlatList from './keypadFlatList';

import { backDeleteImg } from '../../../assets/images';
import {
  buttonNumberFlatList,
  clearnButton,
  incrimentButtons,
  numberButtons,
} from '../../constants';
import { useAppSelector } from '../../hooks/reduxHooks';
import Calculator from '../../classes/Calculator';
import {
  EqualsCommand,
  CleanCommand,
  DeleteCommand,
  ChangeSignCommand,
  AddCommand,
} from '../../classes/Commands';
import { Command } from '../../types';

interface KeypadProps {
  propsFlex: number;
  // eslint-disable-next-line no-unused-vars
  handleButtonPress: (comand: Command) => void
  calculator: Calculator
  handleResultButtonPress: () => void
}

function Keypad({
  propsFlex,
  handleButtonPress,
  calculator,
  handleResultButtonPress,
}: KeypadProps) {
  const theme = useAppSelector((state) => state.theme.value);

  const topKeypadButtonsData = [
    {
      onPress: () => handleButtonPress(new ChangeSignCommand(calculator)),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        theme.keypadButtons.button.buttonStyle,
        styles.smallButonStyle,
      ],
      title: incrimentButtons.plusMinus,
    },
    {
      onPress: () => handleButtonPress(
        new AddCommand(calculator, incrimentButtons.leftParenthesis),
      ),
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.leftParenthesis,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, incrimentButtons.rightParenthesis));
      },
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.rightParenthesis,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, incrimentButtons.percent));
      },
      isSmallButton: true,
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [
        styles.smallButonStyle,
        theme.keypadButtons.button.buttonStyle,
      ],
      title: incrimentButtons.percent,
    },
    {
      onPress: () => {
        handleButtonPress(new CleanCommand(calculator));
      },
      textColor: theme.keypadButtons.deleteButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.deleteButton.buttonStyle,
      ],
      title: clearnButton,
    },
    {
      onPress: () => {
        handleButtonPress(new DeleteCommand(calculator));
      },
      textColor: theme.keypadButtons.deleteButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.deleteButton.buttonStyle,
      ],
      image: backDeleteImg,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, incrimentButtons.divide));
      },
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.divide,
    },
    {
      onPress: () => handleButtonPress(new AddCommand(calculator, incrimentButtons.multiply)),
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.multiply,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, numberButtons.seven));
      },
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.seven,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, numberButtons.eight));
      },
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.eight,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, numberButtons.nine));
      },
      textColor: theme.keypadButtons.button.textColor,
      buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
      title: numberButtons.nine,
    },
    {
      onPress: () => {
        handleButtonPress(new AddCommand(calculator, incrimentButtons.minus));
      },
      textColor: theme.keypadButtons.incrementButton.textColor,
      buttonStyle: [
        styles.butonStyle,
        theme.keypadButtons.incrementButton.buttonStyle,
      ],
      title: incrimentButtons.minus,
    },
  ];

  const bottomKeypadButtonsData = buttonNumberFlatList.map((title) => ({
    onPress: () => {
      handleButtonPress(new AddCommand(calculator, title));
    },
    textColor: theme.keypadButtons.button.textColor,
    buttonStyle: [styles.butonStyle, theme.keypadButtons.button.buttonStyle],
    title,
  }));

  return (
    <View
      style={[{ flex: propsFlex }]}
    >
      <View>
        <KeypadFlatList numColumn={4} data={topKeypadButtonsData} />

        <ColumnContainer>
          <RowContainer>
            <KeypadFlatList numColumn={3} data={bottomKeypadButtonsData} />

            <View style={styles.horizontalContainer}>
              <CustomButton
                onPress={() => {
                  handleButtonPress(new AddCommand(calculator, numberButtons.zero));
                }}
                textStyle={theme.keypadButtons.button.textColor}
                buttonStyle={[
                  styles.largeButonStyle,
                  theme.keypadButtons.button.buttonStyle,
                ]}
                title={numberButtons.zero}
              />
              <CustomButton
                onPress={() => {
                  handleButtonPress(new AddCommand(calculator, numberButtons.dot));
                }}
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
              onPress={() => {
                handleButtonPress(new AddCommand(calculator, incrimentButtons.plus));
              }}
              textStyle={theme.keypadButtons.incrementButton.textColor}
              buttonStyle={[
                styles.fillButonStyle,
                theme.keypadButtons.incrementButton.buttonStyle,
              ]}
              title={incrimentButtons.plus}
            />
            <CustomButton
              onPress={() => {
                handleButtonPress(new EqualsCommand(calculator));
                handleResultButtonPress();
              }}
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
