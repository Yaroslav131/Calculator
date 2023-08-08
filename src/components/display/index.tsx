import { Text, ScrollView } from 'react-native';
import { useRef, useEffect } from 'react';

import { incrimentButtons, inputFontSize, resultFontSize, splitPattern } from '../../constants';
import { StyledText } from '../../../styles/globalStyles';
import { useAppSelector } from '../../hooks/reduxHooks';
import splitNumber from '../../helpingFunctions/splitNumber';

import { Container, styles } from './styles';

interface IDisplayProps {
  inputValue: string;
  resultValue: string;
  isInput: boolean;
  flex: number;
}
function Display(props: IDisplayProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const theme = useAppSelector((state) => state.theme.value)

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }
  }, [props.inputValue]);

  const inputValueArr = props.inputValue.match(splitPattern);

  const equationTextElements = inputValueArr?.map((token, index) => {
    if (Object.values(incrimentButtons).includes(token)) {
      return (<Text key={index} style={theme.display.signColor}>{token}</Text>);
    }
    else {
      token = splitNumber(token)

      return (<Text key={index} >{token}</Text>
      );
    }
  });

  return (
    <Container flex={props.flex}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <StyledText
         testID={"input"}
          fontSize={props.isInput ? inputFontSize.large : inputFontSize.small}
          textColor={props.isInput ?
            theme.display.resultTextColor.color :
            theme.display.inputTextColor.color}>
          {equationTextElements}
        </StyledText>
      </ScrollView>
      <StyledText
         testID={"result"}
        fontSize={props.isInput ? resultFontSize.small : resultFontSize.large}
        textColor={props.isInput ?
          theme.display.inputTextColor.color :
          theme.display.resultTextColor.color} >
        ={props.resultValue}
      </StyledText>
    </Container >
  );
}

export default Display;