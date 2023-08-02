import { StyleSheet, FlatList} from 'react-native';
import {HistoryType} from '../../types/historyType';

import {StyledText} from '../../../styles/styled';
import {Container, ItemContainer} from './styles';
import {useAppSelector} from '../../hooks/reduxHooks';

function History() {
  const theme = useAppSelector((state) => state.theme.value)

  const testHistory: HistoryType[] = [
    {
      inputValue: '2 + 2',
      resultValue: '4',
    },
    {
      inputValue: '5 * 3',
      resultValue: '15',
    },
    {
      inputValue: '10 / 2',
      resultValue: '5',
    },
    {
      inputValue: '6 - 3',
      resultValue: '3',
    },
    {
      inputValue: '2 + 2',
      resultValue: '4',
    },
    {
      inputValue: '5 * 3',
      resultValue: '15',
    },
    {
      inputValue: '10 / 2',
      resultValue: '5',
    },
    {
      inputValue: '6 - 3',
      resultValue: '3',
    },
    {
      inputValue: '2 + 2',
      resultValue: '4',
    },
    {
      inputValue: '5 * 3',
      resultValue: '15',
    },
    {
      inputValue: '10 / 2',
      resultValue: '5',
    },
    {
      inputValue: '6 - 3',
      resultValue: '3',
    },
    {
      inputValue: '2 + 2',
      resultValue: '4',
    },
    {
      inputValue: '5 * 3',
      resultValue: '15',
    },
    {
      inputValue: '10 / 2',
      resultValue: '5',
    },
    {
      inputValue: '6 - 3',
      resultValue: '3',
    },
    {
      inputValue: '2 + 2',
      resultValue: '4',
    },
    {
      inputValue: '5 * 3',
      resultValue: '15',
    },
    {
      inputValue: '10 / 2',
      resultValue: '5',
    },
    {
      inputValue: '6 - 3',
      resultValue: '3',
    },
  ].reverse();

  type ItemProps = {
    inputValue: string;
    resultValue: string;
  };

  const Item = ({inputValue, resultValue}: ItemProps) => (
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

  const keyExtractor = (item: ItemProps, index: number) => index.toString();

  return (
    <Container backgroundColor={theme.background.backgroundColor}>
      <FlatList
        data={testHistory}
        renderItem={({item}) => (
          <Item inputValue={item.inputValue} resultValue={item.resultValue} />
        )}
        keyExtractor={keyExtractor}
        numColumns={1}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    width: '100%',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // Add any other styles you want to apply to the list items
  },
});

export default History;
