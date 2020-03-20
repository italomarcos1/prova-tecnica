import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #191919;
`;

export const Content = styled.View`
  align-self: stretch;
  background-color: #444;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  border: 4px solid #292929;
  border-radius: 4px;
  margin: 40px auto;
  padding: 30px;
`;

export const ContentText = styled.Text`
  font-size: 32px;
  color: #ccc;
`;
