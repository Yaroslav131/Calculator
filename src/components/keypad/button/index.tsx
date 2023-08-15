import React from 'react';
import { TextStyle, ViewStyle, StyleProp } from 'react-native';

import {
  CustomButtonText,
  CustomSmallButtonText,
  CustomTouchableOpacity,
} from './styles';

interface ButtonProps {
  title?: string;
  buttonStyle: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  onPress: () => void;
  children?: React.ReactNode;
  isSmallButton?: boolean;
}

function CustomButton({
  title,
  buttonStyle,
  textStyle,
  children,
  isSmallButton,
  onPress,
}: ButtonProps) {
  return (
    <CustomTouchableOpacity testID="MyUniqueId123" style={[buttonStyle]} onPress={onPress}>
      {children}
      {
        title
        && (isSmallButton ? (
          <CustomSmallButtonText style={textStyle}>
            {title}
          </CustomSmallButtonText>
        ) : (
          <CustomButtonText style={textStyle}>{title}</CustomButtonText>
        ))
      }
    </CustomTouchableOpacity>
  );
}

CustomButton.defaultProps = {
  title: '',
  textStyle: {},
  children: null,
  isSmallButton: false,
};

export default CustomButton;
