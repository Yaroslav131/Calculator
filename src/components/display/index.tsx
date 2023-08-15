/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import { Text, ScrollView } from 'react-native';
import React, { useRef, useEffect } from 'react';

import {
  incrimentButtons, inputFontSize, resultFontSize, splitPattern,
} from '@/constants';
import { StyledText } from '../../../styles/globalStyles';
import { useAppSelector } from '@/hooks/reduxHooks';
import splitNumber from '@/helpingFunctions/splitNumber';

import { Container, styles } from './styles';

interface IDisplayProps {
  inputValue: string;
  resultValue: string;
  isInput: boolean;
  flex: number;
}
function Display({
  inputValue, resultValue, isInput, flex,
}: IDisplayProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }
  }, [inputValue]);

  const inputValueArr = inputValue.match(splitPattern);

  const equationTextElements = inputValueArr?.map((token, index) => {
    let modifiedToken = token;

    if (Object.values(incrimentButtons).includes(token)) {
      return (<Text key={index} style={theme.display.signColor}>{token}</Text>);
    }

    modifiedToken = splitNumber(token);

    return (<Text key={index}>{modifiedToken}</Text>);
  });

  return (
    <Container flex={flex}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <StyledText
          testID="input"
          fontSize={isInput ? inputFontSize.large : inputFontSize.small}
          textColor={isInput
            ? theme.display.resultTextColor.color
            : theme.display.inputTextColor.color}
        >
          {equationTextElements}
        </StyledText>
      </ScrollView>
      <StyledText
        testID="result"
        fontSize={isInput ? resultFontSize.small : resultFontSize.large}
        textColor={isInput
          ? theme.display.inputTextColor.color
          : theme.display.resultTextColor.color}
      >
        =
        {resultValue}
      </StyledText>
    </Container>
  );
}

export default Display;
