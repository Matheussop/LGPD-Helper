import React, { useState, useEffect } from "react";
import { InputStep } from "../../components/InputStep";
import * as DocumentPicker from 'expo-document-picker';
import { Feather } from "@expo/vector-icons";
import { IPickerOptions } from '../../components/SelectInput';
import { Button } from '../../components/Button'

import { Container, 
  Description, 
  ListInputs,
  ListFiles,
  TitleFiles,
  ListArq,
  ListImage,
  OpenFiles,
  SubTitles,
  AboutFile,
  NameFile,
  PreviewImage
} from "./styles";

import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  View,
} from "react-native";
import theme from "../../styles/theme";
import { SelectInput } from "../../components/SelectInput";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";

// const data = [
//   {
//     id: 1,
//     label: "Informação 1",
//     textDescripiton:
//       "Descrição do motivo da utilização da  informação (opcional)",
//   },
//   {
//     id: 2,
//     label: "Informação 2",
//     textDescripiton:
//       "Este informação permitira o consultor avaliar se a empresa esta de acordo com artigo 5 da lei",
//   },
//   {
//     id: 3,
//     label: "Observação",
//     textDescripiton: "Alguma Observação a ser colocada ? ",
//   },
//   {
//     id: 4,
//     label: "Categoria",
//     options: [
//       {value: 'tecnologia', label: 'Tecnologia'},
//       {value: 'alimentao', label: 'Alimentão'},
//       {value: 'saude', label: 'Saúde'},
//     ] as IPickerOptions[],
//     textDescripiton: "Alguma Observação a ser colocada ? ",
//   },
// ];

interface IFile { 
  name: string;
  size: number;
  uri: string;
  type: string;
  isUploaded?: boolean;
}

interface Params{ 
  inputs: any;
  id: string;
}
export function StepDetails() {
  const [value, setValue] = useState([""]);
  const [listFiles, setListFiles] = useState<IFile[]>([] as IFile[]);
  const [listImages, setListImages] = useState<IFile[]>([] as IFile[]);
  const [selectValue, setSelectValue] = useState('');
  const [values, setValues] = useState<string[]>([] as string[]);
  const route = useRoute();
  const { inputs, id } = route.params as Params;

  function changeValue(index: number, newvalue: string) {
    value[index] = newvalue;
    setValue(value);
  }

  useEffect(() => {
    let inputsValues: string[] = [];
    inputs.map((item: any, index: number) => {
      inputsValues[index] = item[Object.keys(item)[0]];
    })

    setValues(inputsValues);
  }, [])

  async function handleOpenFile(){
    try{
      DocumentPicker.getDocumentAsync({type: "application/pdf"}).then(async (resp)  =>  {
        if(resp.type === 'success'){
          // const fileName = resp.uri.replace('file://',"");
          console.log(resp)
          // setListFiles([...listFiles, resp]);
          // const uri = resp.uri
          // let type = resp.uri.substring(resp.uri.lastIndexOf(".") + 1);
          // const form = await new FormData()
          // await form.append('file', { uri, name: 'media', type: `"application/${type}` } as any)
          // console.log(form)
          // let headers = {
          //   "Content-Type": "multipart/form-data" 
          // }
          // await api.post('/categories/import', form, {"headers" : headers}).catch(console.log);
        }
      });
    }catch(error: any){
      console.log('ERR: ' + error.message);
    }
  }

  async function handleOpenImage(){
    try{
      DocumentPicker.getDocumentAsync({type: "image/*"}).then(async (resp)  =>  {
        if(resp.type === 'success'){
          // const fileName = resp.uri.replace('file://',"");
          setListImages([...listImages, resp]);
          const uri = resp.uri
          let type = resp.uri.substring(resp.uri.lastIndexOf(".") + 1);
          const form = await new FormData()
          await form.append('file', { uri, name: 'media', type: `"application/${type}` } as any)
          let headers = {
            "Content-Type": "multipart/form-data" 
          }
          const apiWithToken = await api();
          await apiWithToken.patch('/users/avatar', form, {"headers" : headers})
          .catch((error) => {
            if (error.response) { // get response with a status code not in range 2xx
              Alert.alert((error.response.status + ''),error.response.data.message);
            }else {
              Alert.alert("Error", "Error durante o envio da imagem");
            }
          });
        }
      });
    }catch(error: any){
      console.log('ERR: ' + error.message);
    }
  }

  function onChangeValue(value: string, index: number){
    values[index] = value;
  }

  async function handleSaveInfo(){
    inputs.map((item: any, index: number) => {
      item[Object.keys(item)[0]] = values[index];
    })
    const data = {
      id,
      inputs
    }
    const apiWithToken = await api();
    await apiWithToken.post(`/stepDetails/update`, data)
    .then(response => {
      if(response)
      Alert.alert('Sucesso', 'Dados salvos com sucesso');
    })
    .catch((error) => {
      if (error.response) { // get response with a status code not in range 2xx
        Alert.alert((error.response.status + ''), error.response.data.message);
      }
    });
  }

  return (
    <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Description>
              Clique no simbolo “+” para ter mais detalhes da informação
              referente a lei
            </Description>
            <ListInputs>
              {inputs.map((item: any, index: number) => {
                if(item.type === 'string'){
                  return (
                    <InputStep
                    key={Object.getOwnPropertyNames(item)[0]}
                    label={Object.getOwnPropertyNames(item)[0]}
                    defaultValue={item[Object.keys(item)[0]]}
                    onChangeText={(item) => onChangeValue(item, index)}
                    textDescripiton={item.description && item.description.simpleDescription}
                    description={item.description}
                    />
                  )
                }else if(item.type === 'textarea'){
                  return ( <InputStep
                    key={Object.getOwnPropertyNames(item)[0]}
                    label={Object.getOwnPropertyNames(item)[0]}
                    defaultValue={item[Object.keys(item)[0]]}
                    onChangeText={(item) => onChangeValue(item, index)}
                    textDescripiton={item.description && item.description.simpleDescription}
                    multiline={true}
                    more={false}
                  />
                  )
                } else if(item.type === 'select'){
                  return (
                    <SelectInput  
                    key={Object.getOwnPropertyNames(item)[0]}
                    defaultValue={item[Object.keys(item)[0]]}
                    onValueChange={(item) => onChangeValue(item, index)}
                    label={Object.getOwnPropertyNames(item)[0]} textDescripiton={item.description && item.description.simpleDescription} options={item.options && item.options}
                    description={item.description}
                    />
                  )
                }
              })}
           
              
              {/* {data.map((item, index) => 
          <InputStep key={item.id} label={item.label} textDescripiton={item.textDescripiton} value={value[index]} onChangeText={(value) => changeValue(index, value)}/>
        )} */}
            </ListInputs>
            {/* <ListFiles>
              <TitleFiles>Arquivos relacionados a adequação</TitleFiles>
              <ListArq>
                { 
                  listFiles && listFiles.map((file: IFile) => (
                    <AboutFile key={file.uri}>
                      <NameFile>{file.name}</NameFile>
                      { file.isUploaded ?
                        <Feather name="download" size={24} color={theme.colors.text}/>
                        :
                        <Feather name="upload" size={24} color={theme.colors.text}/>
                      }
                    </AboutFile>
                  ))
                }
              </ListArq>
              <OpenFiles onPress={handleOpenFile}>
                <SubTitles>Escolher novo Arquivo</SubTitles>
              </OpenFiles>
              <ListImage>
                { 
                  listImages && listImages.map((file: IFile) => (
                    <AboutFile key={file.uri}>
                      <PreviewImage source={{uri : file.uri}}/>
                      <NameFile>{file.name}</NameFile>
                      { file.isUploaded ?
                        <Feather name="download" size={24} color={theme.colors.text}/>
                        :
                        <Feather name="upload" size={24} color={theme.colors.text}/>
                      }
                    </AboutFile>
                  ))
                }
              </ListImage>
              <OpenFiles onPress={handleOpenImage}>
                <SubTitles>Escolher nova Imagem</SubTitles>
              </OpenFiles>
            </ListFiles> */}
            <Button title="Salvar" onPress={handleSaveInfo}/>
          </View>
        </TouchableWithoutFeedback>
    </Container>
  );
}
