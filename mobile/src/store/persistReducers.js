import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gym-manager',
      storage: AsyncStorage,
      whitelist: ['checkIn', 'helpOrder'],
    },
    reducers,
  );
  return persistedReducer;
};
