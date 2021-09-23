import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

import * as Google from 'expo-google-app-auth';
import api from '../services/apiWithoutToken';
import { Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps{
  children: ReactNode
}

interface IUser{
  name: string,
  email: string,
  consultantName?: string,
  photo?: string
  user_type: string;
}

interface IAuthContextData{
  user: IUser;
  signInWithGoogle(userType: 'consultor' | 'cliente' | 'autoavaliação'): Promise<void>;
  signOut(): Promise<void>;
  updatedUser: (user: IUser) => Promise<void>;
  userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userStorageLoading, setUserStorageLoading] = useState(true)

  const userStorageKey = '@LGPD-Helper:user'

  async function signInWithGoogle(userType: 'consultor' | 'cliente' | 'autoavaliação'){
    try{
      // const result = await Google.logInAsync({
      //   iosClientId: '541272048092-u4k6v5m3vfl24fr2ru51l0buf5ldssd3.apps.googleusercontent.com',
      //   androidClientId: '541272048092-psqjkvf8e6eo8annebs9khqgvmde3jpe.apps.googleusercontent.com',
      //   scopes: ['profile','email']
      // })
      
      // if(result.type === 'success'){
      //   const userLogged = {
      //     id: String(result.user.id),
      //     email: String(result.user.email)!,
      //     name: String(result.user.name)!,
      //     photo: String(result.user.photoUrl!)
      //   };

      const email = 'mlnoob98@gmail.com'
      const name = 'Matheus'
      const user = { 
        email,
        name,
        user_type: String(userType)
      }
      const response = await api.post('/sessions', user).catch((error) => {
        if (error.response) { 
          Alert.alert((error.response.status + ''),error.response.data.message);
        }
        if(error){
          Alert.alert('Error', 'Error ao tentar conexão com servidor');
        }
      });
      if(response && response.data){
        const userLogged = {
          email,
          name,
          token: response.data.token,
          // photo: String(result.user.photoUrl!)
          user_type: String(userType)
        };
        setUser(userLogged)
        try{
          await AsyncStorage.setItem(userStorageKey, response.data.token)
        }catch(error: any){
          throw new Error(error)
        }
      }

    }catch(error: any){
      throw new Error(error)
    }
  } 

  async function signOut(){
    setUser({} as IUser);
  }

  async function updatedUser(user: IUser){
    try {
      setUser(user);
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    setUserStorageLoading(true);

    async function loadUserStorageData(){
      // const userStorage = await AsyncStorage.getItem(userStorageKey);
      // if(userStorage){
      //   const userLoged = JSON.parse(userStorage) as IUser;
      //   setUser(userLoged);
      // }
      // setUserStorageLoading(false);
    }
    loadUserStorageData();
  },[])

  return(
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      signOut,
      updatedUser,
      userStorageLoading
      }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider , useAuth}