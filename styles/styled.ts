import {StyleSheet, Text} from 'react-native';
import {styled} from 'styled-components/native';

export const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#303136',
  },
});

interface StyledTextProps {
  textColor: string;
  fontSize: string;
}

export const StyledText = styled(Text)<StyledTextProps>`
  font-family: poppins;
  text-align: right;
  font-size: ${props => props.fontSize};
  color: ${props => props.textColor};
`;
