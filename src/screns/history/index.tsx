import { FlatList, TouchableOpacity, Text } from 'react-native';
import { useEffect } from "react"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StyledText, globalStyles } from '../../../styles/globalStyles';
import { Container, ItemContainer } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { resetHistory } from '../../slices/historySlice';


type ItemProps = {
  inputValue: string;
  resultValue: string;
};

interface HistoryScreenProps {
  navigation: NativeStackNavigationProp<any, any>
};

const HistoryScreen: React.FC<HistoryScreenProps> = ({ navigation }) => {
  const theme = useAppSelector((state) => state.theme.value)
  const history = useAppSelector((state) => state.history.value);
  const dispatch = useAppDispatch();

  const clone = JSON.parse(JSON.stringify(history));
  const resverseHistory = clone.reverse();

  const keyExtractor = (item: ItemProps, index: number) => index.toString();

  const Item = ({ inputValue, resultValue }: ItemProps) => (
    <ItemContainer>
      <StyledText
        fontSize="20px"
        textColor={theme.display.inputTextColor.color}>
        {inputValue}
      </StyledText>
      <StyledText
        fontSize="30px"
        textColor={theme.display.resultTextColor.color}>
        ={resultValue}
      </StyledText>
    </ItemContainer>
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => dispatch(resetHistory())}>
          <Text style={globalStyles.headerText}>Clean</Text>
        </TouchableOpacity>
      ),
    })

  }, [navigation]);

  return (
    <Container backgroundColor={theme.background.backgroundColor}>
      <FlatList
        data={resverseHistory}
        renderItem={({ item }) => (
          <Item inputValue={item.inputValue} resultValue={item.resultValue} />
        )}
        keyExtractor={keyExtractor}
        numColumns={1}
      />
    </Container>
  );
}
export default HistoryScreen;
