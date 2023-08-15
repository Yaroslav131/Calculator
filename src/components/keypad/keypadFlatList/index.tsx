import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  TextStyle,
  ListRenderItem,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import CustomButton from '../button/index';

interface KeypadButton {
  textColor: TextStyle;
  buttonStyle: StyleProp<ViewStyle>;
  title?: string;
  image?: ImageSourcePropType;
  isSmallButton?: boolean;
  onPress: () => void
}

interface KeypadProps {
  data: KeypadButton[];
  numColumn: number;
  styles?: StyleProp<ViewStyle>;
}

function KeypadFlatList({ data, numColumn, styles }: KeypadProps) {
  const renderItem: ListRenderItem<KeypadButton> = ({ item }) => (
    <CustomButton
      onPress={item.onPress}
      isSmallButton={item.isSmallButton}
      textStyle={item.textColor}
      buttonStyle={item.buttonStyle}
      title={item.title}
    >
      {item.image && <Image source={item.image} />}
    </CustomButton>
  );

  const keyExtractor = (item: KeypadButton, index: number) => index.toString();

  return (
    <View style={styles}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={numColumn}
      />
    </View>
  );
}

KeypadFlatList.defaultProps = {
  styles: null,
};

export default KeypadFlatList;
