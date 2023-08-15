import styled from 'styled-components/native';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${props => props.backgroundColor };
  align-items: center;
  justify-content: center;
`;