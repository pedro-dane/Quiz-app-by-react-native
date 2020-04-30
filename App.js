import React from 'react';
import Auth from './Auth.js'
import { Provider } from "react-redux";
import store from "./store";
function App() {
  console.disableYellowBox=true;
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  )
}
export default App;