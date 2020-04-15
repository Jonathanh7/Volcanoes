const axios = require('axios'); 
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://volcano-stuff.herokuapp.com/' : 'http://localhost:3000'
})

export const loginUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;

}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
 const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false 
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

export const signOut = async user => {
  try {
    console.log("I got here")
    await localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}


export const readAllVolcano = async () => {
  const resp = await api.get('/volcanos');
  return resp.data;
}

export const addToFavorites = async (params) => {
  if (localStorage.getItem('authToken')) {
    api.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('authToken')}`;
    const resp = await api.post('/favorites', params);

    return resp.data;
  }

}

export const getAllCurrentUserFavorites = async () => {
  if (localStorage.getItem('authToken')) {
    api.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('authToken')}`;
    const resp = await api.get('/favorites');
    
    return resp.data;
  }
}

export const deleteSelectedFavorite = async (id) => {
  if (localStorage.getItem('authToken')) {
    api.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('authToken')}`;
    const resp = await api.delete(`/favorites/${id}`);
    
    return resp.data;
  }
}

export const updateVolcano = async (id, params) => {
  if (localStorage.getItem('authToken')) {
    api.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('authToken')}`;
    const resp = await api.put(`/volcanos/${id}`, { volcano: params });
    
    return resp.data;
  }
}