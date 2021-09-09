import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  HeaderTop,
  Header,
  Title,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
  TextInfo,
  InfoWreapper,
  WrapperButtons,
  ButtonSuport,
  ButtonsTerms,
  ButtonTerm,
  ButtonAbout,
} from "./styles";
import { Input } from "../../components/Input";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import * as Yup from "yup";
import { useNetInfo } from "@react-native-community/netinfo";
import { Switch } from "../../components/Switch";
import { ButtonSmall } from "../../components/ButtonSmall";
import { RFPercentage } from "react-native-responsive-fontsize";

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  // const { user, signOut, updatedUser} = useAuth();
  const [option, setOption] = useState<"dataEdit" | "aplication">("dataEdit");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isNotifyPush, setIsNotifyPush] = useState(false);
  const [isNotifyEmail, setIsNotifyEmail] = useState(false);
  const [isSyncronizeWifi, setIsSyncronizeWifi] = useState(false);

  const toggleSwitch1 = () => setIsNotifyPush((previousState) => !previousState);
  const toggleSwitch2 = () => setIsNotifyEmail((previousState) => !previousState);
  const toggleSwitch3 = () => setIsSyncronizeWifi((previousState) => !previousState);
  
  function handleChengeOption(value: "dataEdit" | "aplication") {
    if (netInfo.isConnected === false && value === "aplication") {
      Alert.alert(
        "Você esta Offline",
        "Para mudar a senha, conecte-se a Internet"
      );
    } else {
      setOption(value);
    }
  }

  async function handleAvatarSelect() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    if (result.uri) {
      setAvatar(result.uri);
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
      });

      await schema.validate({ name });

      // await updatedUser({
      //   id: user.id,
      //   user_id: user.user_id,
      //   email: user.email,
      //   name: name,
      //   avatar: avatar,
      //   driver_license: '',
      //   token: user.token,
      // });

      Alert.alert("Perfil atualizado!");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa,", error.message);
      } else {
        Alert.alert("Nao foi possivel atualizar o perfil");
      }
    }
  }

  function handleSignOut() {
    Alert.alert(
      "Tem certeza ?",
      "Lembre-se, que se você sair, irá precisar de internet para conectar-se novamente.",
      [
        {
          text: "Cancelar",
          onPress: () => {},
        },
        {
          text: "Sair",
          onPress: () => {},
        },
      ]
    );
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <StatusBar
              backgroundColor="transparent"
              translucent
              barStyle="light-content"
            />
            <Header>
              <PhotoContainer>
                {!!avatar && <Photo source={{ uri: avatar }} />}
                <PhotoButton onPress={handleAvatarSelect}>
                  <Feather name="camera" size={24} color={theme.colors.shape} />
                </PhotoButton>
              </PhotoContainer>
            </Header>

            <Content>
              <Options>
                <Option
                  onPress={() => handleChengeOption("dataEdit")}
                  active={option === "dataEdit"}
                >
                  <OptionTitle active={option === "dataEdit"}>
                    Dados
                  </OptionTitle>
                </Option>
                <Option
                  onPress={() => handleChengeOption("aplication")}
                  active={option === "aplication"}
                >
                  <OptionTitle active={option === "aplication"}>
                    Aplicação
                  </OptionTitle>
                </Option>
              </Options>
              {option === "dataEdit" ? (
                <Section>
                  <Input
                    iconName="user"
                    // defaultValue={user.name}
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    textInput={"Nome"}
                    placeholder="Nome"
                  />
                  <Input
                    iconName="mail"
                    // defaultValue={user.email}
                    defaultValue={"matheus@gmail.com"}
                    textInput={"E-mail"}
                    editable={false}
                  />
                  <Input
                    iconName="user"
                    // defaultValue={user.email}
                    defaultValue={"Matheus"}
                    textInput={"Nome Consultor"}
                    editable={false}
                  />
                  <WrapperButtons>
                    <Button
                      title="Salvar Alterações"
                      onPress={handleProfileUpdate}
                    />
                  </WrapperButtons>
                </Section>
              ) : (
                <Section>
                  <Switch
                    onValueChange={toggleSwitch1}
                    value={isNotifyPush}
                    textInput={"Notificações no celular"}
                  />

                  <Switch
                    onValueChange={toggleSwitch2}
                    value={isNotifyEmail}
                    textInput={"Notificações no email"}
                  />

                  <Switch
                    onValueChange={toggleSwitch3}
                    value={isSyncronizeWifi}
                    textInput={"Sincronizar apenas em WI-FI"}
                  />

                  <InfoWreapper>
                    <TextInfo>
                      Caso queira entrar em contato com o suporte basta nós
                      enviar um email, que responderemos o mais rápido possivel
                    </TextInfo>
                  </InfoWreapper>
                  <WrapperButtons>
                    <ButtonSuport>
                      <ButtonSmall
                        title="Acesso ao suporte"
                        onPress={handleProfileUpdate}
                      />
                    </ButtonSuport>
                    <ButtonsTerms>
                      <ButtonTerm>
                        <ButtonSmall
                          title="Termos de Compromisso"
                          color={theme.colors.main_dark}
                        />
                      </ButtonTerm>
                      <ButtonAbout>
                        <ButtonSmall
                          color={theme.colors.main_dark}
                          title="Sobre o LGPDHelper"
                        />
                      </ButtonAbout>
                    </ButtonsTerms>
                  </WrapperButtons>
                </Section>
              )}
            </Content>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}
