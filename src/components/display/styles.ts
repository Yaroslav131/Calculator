import { View, StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';

interface ContainerProps {
  flex: number;
}

export const Container = styled(View) <ContainerProps>`
  flex: 1;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  align-items: flex-end;
  justify-content: flex-end;
  flex: ${(props) => props.flex};
`;

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
