import axios from 'axios'
import { serializeQueryParams } from './apiUtils'
import apiHeaders from './apiHeaders'
import { AsyncStorage } from 'react-native';

// (await AsyncStorage.getItem('userToken')).toString() 
export default {
    async makeGetRequest(path, callback, fail, params) {
    path += serializeQueryParams(params)
   // alert((await AsyncStorage.getItem('userToken')).toString()  )
     // Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTg1MjExODIzLCJleHAiOjE1ODYwNzU4MjN9.Wu1igDVc3KEGRK5A8nXPL_WUAdx0OXwFr0---mu4vzaJ0A8t1sLB1TXV5Fy5I_lc7aN7h66a5__TJDwjsIsqpA'
    //var hh='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTg1MjExODIzLCJleHAiOjE1ODYwNzU4MjN9.Wu1igDVc3KEGRK5A8nXPL_WUAdx0OXwFr0---mu4vzaJ0A8t1sLB1TXV5Fy5I_lc7aN7h66a5__TJDwjsIsqpA'
   //var hh=(await AsyncStorage.getItem('userToken')).toString()  
    axios.get(path, { withCredentials: true, headers: {
         Authorization:'Bearer '+ (await AsyncStorage.getItem('userToken')).toString()  
       }}) 
      .then(callback)
      .catch(fail)
  },
    async makePostRequest(path, callback, fail, payload, params) {
    if (params != null) {
      path += serializeQueryParams(params)
    }
    
    //  console.log("===URL===="+JSON.stringify(path,null,2));
    axios.post(path, payload)
      .then(callback)
      .catch(fail)

  },
  async makeDeleteRequest(path, callback, fail) {
    axios.delete(path, { withCredentials: true, headers: {
      Authorization:'Bearer '+ (await AsyncStorage.getItem('userToken')).toString()  
    }}) 
      .then(callback)
      .catch(fail)
  },
  async makePutRequest(path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.put(path, payload, { withCredentials: true, headers: {
      Authorization:'Bearer '+ (await AsyncStorage.getItem('userToken')).toString()  
    }}) 
      .then(callback)
      .catch(fail)
  },
  getImageFromBlob(path, callback, fail, params) {
    let headers = { ...apiHeaders }
    headers.Accept = 'application/json'
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    path += serializeQueryParams(params)
    axios.get(path, { responseType: 'arraybuffer', withCredentials: true, headers }).then(callback).catch(fail)
  },
  uploadFile(path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        ...apiHeaders
      },
      withCredentials: true
    }).then(callback)
      .catch(fail)
  }
}
