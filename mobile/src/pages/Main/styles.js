import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #191919;
`;

export const HeaderText = styled.Text`
  font-size: 32px;
  color: #ccc;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  background-color: #444;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 25px;
`;

export const FormInput = styled(Input)`
  height: 43px;
  width: 225px;
  border: 1.5px solid #333;
  border-radius: 4px;
  padding: 2px 10px;
  background-color: #777;
  margin-bottom: 15px;
  /* mudar a cor no onFocus e desabilita com onBlur, nas props */
`;

export const Social = styled.View`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;

export const SubmitButton = styled(CustomButton)`
  align-items: center;
  background: #e6b32a;
  border: 2px solid #252525;
  border-radius: 8px;
  color: #252525;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  width: 200px;
  justify-content: center;
  padding: 0px 10px;
`;
