import axios from 'axios'
import { getHeaders } from './Tokengets.js'
import { baseUrl } from '../config.js'

// user requests

export function signUpUser(formdata){
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function signInUser(formdata){
  return axios.post(`${baseUrl}/auth/login/`, formdata )
}

export function getUserInfo(){
  const header = { headers: { Authorization: `Bearer ${getHeaders()}` } }
  return axios.get(`${baseUrl}/auth/profile/`, header)
}

export function postUpdate(formdata, launchId){
  const header = { headers: { Authorization: `Bearer ${getHeaders()}` } }
  return axios.post(`${baseUrl}/launches/${launchId}/updates/`, formdata, header)
}

export function removeUpdate( formdata, launchId, updateId ){
  const header = { headers: { Authorization: `Bearer ${getHeaders()}` } }
  return axios.post(`${baseUrl}/launches/${launchId}/updates/${updateId}/`, formdata, header)
}

export function verifyUpdate( launchId, updateId, verifyId ){
  return axios({
    method: 'POST',
    url: `${baseUrl}/launches/${launchId}/updates/${updateId}/${verifyId}/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getHeaders()}`,
    },
  })
}

//launch requests

export function getLaunch(launchId){
  return axios.get(`${baseUrl}/launches/${launchId}`)
}

export function getAllLaunches(){
  return axios.get(`${baseUrl}/launches/`)
}



