import { FlatList, TouchableOpacity, Text } from 'react-native';
import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { StyledText, globalStyles } from '../../../styles/globalStyles';
import { Container, ItemContainer } from './styles';
import { resetHistory } from '../../slices/historySlice';
import { RootState } from '../../store/store';

interface ItemProps {
  inputValue: string;
  resultValue: string;
}

interface HistoryScreenState {
  resverseHistory: ItemProps[];
}

interface HistoryScreenProps extends ConnectedProps<typeof connector> {
  navigation: any;
}

class HistoryScreen extends Component<HistoryScreenProps, HistoryScreenState> {
  constructor(props: HistoryScreenProps) {
    super(props);
    this.state = {
      resverseHistory: this.getReversedHistory(),
    };
  }

  getReversedHistory = () => {
    const { history } = this.props;
    const clone = [...history];
    return clone.reverse();
  };

  keyExtractor = (item: ItemProps, index: number) => index.toString();

  Item = ({ inputValue, resultValue }: ItemProps) => (
    <ItemContainer>
      <StyledText
        fontSize="20px"
        textColor={this.props.theme.display.inputTextColor.color}
      >
        {inputValue}
      </StyledText>
      <StyledText
        fontSize="30px"
        textColor={this.props.theme.display.resultTextColor.color}
      >
        =
        {resultValue}
      </StyledText>
    </ItemContainer>
  );

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          this.props.resetHistory();
          this.setState({
            resverseHistory: [],
          });
          /// кастыль спросить
        }}
        >
          <Text style={globalStyles.headerText}>Clean</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    const { theme } = this.props;
    const { resverseHistory } = this.state;

    return (
      <Container style={{ backgroundColor: theme.background.backgroundColor }}>
        <FlatList
          data={resverseHistory}
          renderItem={({ item }) => (
            <this.Item inputValue={item.inputValue} resultValue={item.resultValue} />
          )}
          keyExtractor={this.keyExtractor}
          numColumns={1}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.value,
  history: state.history.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetHistory: () => dispatch(resetHistory()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(HistoryScreen);
