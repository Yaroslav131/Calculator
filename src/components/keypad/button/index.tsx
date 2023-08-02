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

const CustomButton: React.FC<ButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  children,
  isSmallButton,
  onPress
}) => {
  return (
    <CustomTouchableOpacity style={[buttonStyle]} onPress={onPress}>
      {children}
      {title &&
        (isSmallButton ? (
          <CustomSmallButtonText style={textStyle}>
            {title}
          </CustomSmallButtonText>
        ) : (
          <CustomButtonText style={textStyle}>{title}</CustomButtonText>
        ))}
    </CustomTouchableOpacity>
  );
};

export default CustomButton;
