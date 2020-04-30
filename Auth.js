import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './Authloading';
import Main from './pages/Main'
import Home from './pages/Home'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: Home,
      Auth: Main,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);