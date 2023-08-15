import { styled } from 'styled-components/native';
import { View } from 'react-native';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled(View) <ContainerProps>`
  flex: 1;
  align-items: flex-end;
  background-color: ${(props) => props.backgroundColor};
`;

export const ItemContainer = styled(View)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 100%;
`;
