import {StyleSheet, Dimensions, View} from 'react-native';

import styled from 'styled-components/native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const buttonHeight = screenWidth * 0.18;
const buttonWidth = buttonHeight;
const margin = 8;

export const ColumnContainer = styled(View)`
  flex-direction: row;
`;

export const RowContainer = styled(View)`
  flex-direction: column;
  justifycontent: 'space-between';
`;

export const styles = StyleSheet.create({
  keypadContainer: {},
  horizontalContainer: {
    flexDirection: 'row',
  },

  largeButtonStyle: {
    flex: 1,
  },

  smallButonStyle: {
    margin: margin,
    height: buttonHeight / 1.9,
    width: buttonWidth,
   
  },
  butonStyle: {
    margin: margin,
    height: buttonHeight,
    width: buttonWidth,
  },
  fillButonStyle: {
    margin: margin,
    width: buttonWidth,
    flex: 1,
  },
  largeButonStyle: {
    margin: margin,
    height: buttonHeight,
    width: (buttonHeight + margin) * 2,
  },
});
