import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  HeaderText,
  Form,
  FormInput,
  Social,
  SubmitButton,
} from './styles';
import CustomButton from '../../components/CustomButton';

import api from '../../services/api';

export default function Main({ navigation }) {
  useEffect(() => {
    async function alreadyDid() {
      if (await AsyncStorage.getItem('done')) {
        navigation.navigate('After');
      }
    }

    alreadyDid();
  }, []);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [visible, setVisible] = useState(false);
  const [hasSocial, setHasSocial] = useState(false);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(true);

  const [facebook, setFb] = useState(false);
  const [instagram, setIg] = useState(false);
  const [linkedin, setLn] = useState(false);

  const [option, setOption] = useState('');

  const phoneRef = useRef();
  const lastNameRef = useRef();

  useEffect(() => {
    setVisible(false);
  }, [option]);

  function handleHasSocial(value) {
    if (value !== hasSocial) {
      setYes(!yes);
      setFb(false);
      setIg(false);
      setLn(false);
      setNo(!no);
      setHasSocial(!hasSocial);
    }
  }

  async function handleSubmit() {
    await api.post('/create', {
      name,
      last_name: lastName,
      phone_number: phone,
      got_to_know: option,
      has_social: hasSocial,
      social_media: hasSocial ? [facebook, instagram, linkedin] : null,
    });

    AsyncStorage.setItem('done', JSON.stringify({ done: true }));

    navigation.navigate('After');
  }

  return (
    <Container>
      <HeaderText>Form</HeaderText>
      <Form>
        <FormInput
          icon="perm-identity"
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => lastNameRef.current.focus()}
        />
        <FormInput
          icon="perm-identity"
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={setLastName}
          autoCorrect={false}
          autoCapitalize="none"
          ref={lastNameRef}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current.focus()}
        />
        <FormInput
          icon="phone"
          keyboardType="phone-pad"
          value={phone}
          maxLength={11}
          onChangeText={setPhone}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Número de telefone"
          ref={phoneRef}
        />
        <Text style={{ padding: 3, fontWeight: 'bold', fontSize: 16 }}>
          Como nos conheceu?
        </Text>
        <CustomButton
          style={{
            backgroundColor: '#777',
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
            height: 35,
            width: 225,
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: '#333',
            borderRadius: 4,
          }}
          onPress={() => setVisible(true)}
        >
          {option || 'Clique para abrir as opções'}
        </CustomButton>

        <Modal
          visible={visible}
          animationType="slide"
          transparent
          onRequestClose={() => setVisible(false)}
        >
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: '#999',
                margin: 50,
                padding: 15,
                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <CustomButton
                onPress={() => setOption('TV')}
                style={{
                  padding: 15,
                }}
              >
                TV
              </CustomButton>
              <CustomButton
                onPress={() => setOption('Internet')}
                style={{
                  padding: 15,
                }}
              >
                Internet
              </CustomButton>
              <CustomButton
                onPress={() => setOption('Outros')}
                style={{
                  padding: 15,
                }}
              >
                Outros
              </CustomButton>
            </View>
          </TouchableOpacity>
        </Modal>

        <Text style={{ padding: 3, fontWeight: 'bold', fontSize: 16 }}>
          Tem rede social?
        </Text>
        <Social visible>
          <CustomButton
            onPress={() => {
              handleHasSocial(true);
            }}
            color={yes ? '#e6b32a' : '#ccc'}
          >
            Sim
          </CustomButton>
          <CustomButton
            onPress={() => {
              handleHasSocial(false);
            }}
            color={no ? '#e6b32a' : '#ccc'}
          >
            Não
          </CustomButton>
        </Social>

        <Social visible={hasSocial}>
          <CustomButton
            color={facebook ? '#e6b32a' : '#ccc'}
            icon="facebook"
            onPress={() => setFb(!facebook)}
            style={{ marginRight: 10 }}
          />
          <CustomButton
            color={instagram ? '#e6b32a' : '#ccc'}
            icon="instagram"
            onPress={() => setIg(!instagram)}
            style={{ marginRight: 10 }}
          />
          <CustomButton
            color={linkedin ? '#e6b32a' : '#ccc'}
            icon="linkedin"
            onPress={() => setLn(!linkedin)}
            style={{}}
          />
        </Social>

        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
