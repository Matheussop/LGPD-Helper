import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getToken(){
  const userStorageKey = '@LGPD-Helper:user'

  let token = await AsyncStorage.getItem(userStorageKey);
  if(token){
    return token;
  }
}

const api = async () => axios.create({ 
  baseURL: 'http://192.168.15.11:3737',
  headers: {
    'Authorization':`Bearer ${await getToken()}`
  }
});

export default api;