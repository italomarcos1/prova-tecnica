import styled from 'styled-components/native';
import { Image } from 'react-native';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #333;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  background-color: #e6b32a;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
`;

export const Social = styled.View`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;

export const SocialMediaButton = styled(CustomButton)`
  color: ${({ on }) => (on ? '#339123' : '#ccc')};
  padding: 5px;
`;

export const Logo = styled(Image)`
  width: 125px;
  height: 28px;
`;
