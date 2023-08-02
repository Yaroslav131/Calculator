import { Text, ScrollView } from 'react-native';
import { useRef, useEffect } from 'react';
import { incrimentButtons } from '../../constants/buttons';
import { Container, styles } from './styles';
import { StyledText } from '../../../styles/styled';

import { useAppSelector } from '../../hooks/reduxHooks';

interface IDisplayProps {
  inputValue: string;
  resultValue: string;
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

  const equationTextElements = props.inputValue.split('').map((x, index) => {
    if (Object.values(incrimentButtons).includes(x)) {
      return (
        <Text key={index} style={theme.display.signColor}>
          {x}
        </Text>
      );
    } else {
      return (
        <Text key={index} style={theme.display.inputTextColor}>
          {x}
        </Text>
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
          fontSize="30px"
          textColor={theme.display.inputTextColor.color}>
          {equationTextElements}
        </StyledText>
      </ScrollView>
      <StyledText
        fontSize="50px"
        textColor={theme.display.resultTextColor.color}>
        ={props.resultValue}
      </StyledText>
    </Container>
  );
}

export default Display;
