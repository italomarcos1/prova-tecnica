import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #191919;
`;

export const Content = styled.View`
  background-color: #444;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
  width: 300px;
  height: 350px;
  border: 4px solid #292929;
  border-radius: 4px;
  margin: 40px auto;
  padding: 30px;
`;

export const ContentText = styled.Text`
  font-size: 26px;
  text-align: center;
  color: #ccc;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 187px;
  height: 42px;
  margin-bottom: 30px;
`;
