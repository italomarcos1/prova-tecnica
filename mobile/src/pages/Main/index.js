import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Form,
  FormInput,
  Social,
  SocialMediaButton,
  Logo,
} from './styles';
import CustomButton from '../../components/CustomButton';

export default function Main() {
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
  const knownRef = useRef();

  useEffect(() => {
    setVisible(false);
  }, [option]);

  function handleHasSocial(value) {
    if (value !== hasSocial) {
      setYes(!yes);
      setNo(!no);
      setHasSocial(!hasSocial);
    }
  }

  function handleSubmit() {
    console.tron.log({
      name,
      lastName,
      phone,
      hasSocial,
      facebook,
      instagram,
      linkedin,
    });
  }

  return (
    <Container>
      <Image
        source={{
          uri: 'https://elogroup.eadplataforma.com/upload/others/logo.png',
        }}
        style={{ width: 125, height: 28 }}
      />

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
        <CustomButton onPress={() => setVisible(true)}>
          <Text>Como nos conheceu?</Text>
        </CustomButton>

        <Modal visible={visible} animationType="slide" transparent>
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
                backgroundColor: '#ffffff',
                margin: 50,
                padding: 50,
                alignItems: 'center',
              }}
            >
              <Text>Testando</Text>
              <Text>Testando</Text>
              <Text>Testando</Text>
            </View>
          </TouchableOpacity>
        </Modal>

        <Text style={{ padding: 5 }}>Tem rede social?</Text>
        <Social visible>
          <SocialMediaButton
            onPress={() => {
              handleHasSocial(true);
            }}
            on={yes}
          >
            Sim
          </SocialMediaButton>
          <SocialMediaButton
            onPress={() => {
              handleHasSocial(false);
            }}
            on={no}
          >
            Não
          </SocialMediaButton>
        </Social>

        <Social visible={hasSocial}>
          <SocialMediaButton
            on={facebook}
            icon="facebook"
            onPress={() => setFb(!facebook)}
          />
          <SocialMediaButton
            on={instagram}
            icon="instagram"
            onPress={() => setIg(!instagram)}
          />
          <SocialMediaButton
            on={linkedin}
            icon="linkedin"
            onPress={() => setLn(!linkedin)}
          />
        </Social>

        <CustomButton onPress={handleSubmit}>Enviar</CustomButton>
      </Form>
    </Container>
  );
}
